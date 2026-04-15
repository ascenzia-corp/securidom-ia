/**
 * Google Apps Script — Webhook pour l'evaluation quiz Securidom × Ascenzia
 *
 * Ce script recoit les resultats du quiz d'evaluation (15 questions, 4 modules)
 * et les stocke dans un Google Spreadsheet. Il permet aussi de recuperer
 * l'ensemble des resultats au format JSON.
 *
 * Instructions :
 * 1. Creez un Google Spreadsheet vierge
 * 2. Allez dans Extensions > Apps Script
 * 3. Collez ce code dans l'editeur
 * 4. Deployez en tant que "Application Web"
 *    - Executer en tant que : Moi
 *    - Acces : Tout le monde
 * 5. Copiez l'URL de deploiement → variable d'environnement Vercel
 *    NEXT_PUBLIC_EVALUATION_WEBHOOK_URL
 *
 * Format attendu en POST :
 * {
 *   "prenom": "Marie",
 *   "answers": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
 *   "score": 13,
 *   "percentage": 87,
 *   "moduleScores": { "m1": 4, "m2": 5, "m3": 2, "m4": 2 }
 * }
 */

// --- POST : enregistrer un resultat de quiz ---
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);

    // Creer les en-tetes si la feuille est vide
    if (sheet.getLastRow() === 0) {
      var headers = [
        "Timestamp", "Prenom",
        "Q1", "Q2", "Q3", "Q4", "Q5", "Q6", "Q7", "Q8",
        "Q9", "Q10", "Q11", "Q12", "Q13", "Q14", "Q15",
        "Score", "Pourcentage",
        "M1", "M2", "M3", "M4"
      ];
      sheet.appendRow(headers);

      // Styliser les en-tetes (fond dore, texte sombre)
      var headerRange = sheet.getRange(1, 1, 1, headers.length);
      headerRange.setFontWeight("bold");
      headerRange.setBackground("#DDAC63");
      headerRange.setFontColor("#1A202C");
    }

    var answers = data.answers || [];
    var moduleScores = data.moduleScores || {};

    // Construire la ligne de donnees
    var row = [
      new Date().toISOString(),
      data.prenom || "",
      answers[0] || 0, answers[1] || 0, answers[2] || 0, answers[3] || 0,
      answers[4] || 0, answers[5] || 0, answers[6] || 0, answers[7] || 0,
      answers[8] || 0, answers[9] || 0, answers[10] || 0, answers[11] || 0,
      answers[12] || 0, answers[13] || 0, answers[14] || 0,
      data.score || 0,
      data.percentage || 0,
      moduleScores.m1 || 0, moduleScores.m2 || 0,
      moduleScores.m3 || 0, moduleScores.m4 || 0
    ];

    sheet.appendRow(row);

    return ContentService.createTextOutput(
      JSON.stringify({ status: "success" })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({ status: "error", message: error.toString() })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

// --- GET : recuperer tous les resultats ---
function doGet(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var lastRow = sheet.getLastRow();

    // Si la feuille est vide ou ne contient que les en-tetes
    if (lastRow <= 1) {
      return ContentService.createTextOutput(
        JSON.stringify({ status: "ok", participants: [] })
      ).setMimeType(ContentService.MimeType.JSON);
    }

    // Lire toutes les lignes de donnees (en sautant les en-tetes)
    // 23 colonnes : Timestamp, Prenom, Q1-Q15, Score, Pourcentage, M1-M4
    var data = sheet.getRange(2, 1, lastRow - 1, 23).getValues();
    var participants = [];

    for (var i = 0; i < data.length; i++) {
      var row = data[i];

      // Reconstruire les reponses Q1 a Q15 (colonnes 3 a 17, index 2 a 16)
      var answers = [];
      for (var q = 2; q <= 16; q++) {
        answers.push(row[q]);
      }

      participants.push({
        timestamp: row[0],
        prenom: row[1],
        answers: answers,
        score: row[17],
        percentage: row[18],
        moduleScores: {
          m1: row[19],
          m2: row[20],
          m3: row[21],
          m4: row[22]
        }
      });
    }

    return ContentService.createTextOutput(
      JSON.stringify({ status: "ok", participants: participants })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({ status: "error", message: error.toString() })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}
