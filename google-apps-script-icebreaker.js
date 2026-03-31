/**
 * Google Apps Script — Webhook pour l'icebreaker "Mon Profil IA"
 *
 * Instructions :
 * 1. Créez un Google Spreadsheet vierge
 * 2. Allez dans Extensions > Apps Script
 * 3. Collez ce code
 * 4. Déployez en tant que "Application Web"
 *    - Exécuter en tant que : Moi
 *    - Accès : Tout le monde
 * 5. Copiez l'URL de déploiement → variable d'environnement Vercel NEXT_PUBLIC_ICEBREAKER_WEBHOOK_URL
 */

// --- POST : enregistrer un participant ---
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);

    // Créer les en-têtes si la feuille est vide
    if (sheet.getLastRow() === 0) {
      var headers = [
        "Session", "Prénom", "Timestamp",
        "Q1", "Q2", "Q3", "Q4", "Q5", "Q6", "Q7", "Q8", "Q9", "Q10",
        "Connaissance", "Usage", "Confiance", "Vision", "Appétence",
        "Score global", "Profil"
      ];
      sheet.appendRow(headers);
      var headerRange = sheet.getRange(1, 1, 1, headers.length);
      headerRange.setFontWeight("bold");
      headerRange.setBackground("#DDAC63");
      headerRange.setFontColor("#1A202C");
    }

    var scores = data.scores || {};
    var answers = data.answers || [];

    var row = [
      data.session || "",
      data.name || "",
      new Date().toISOString(),
      answers[0] || "", answers[1] || "", answers[2] || "", answers[3] || "",
      answers[4] || "", answers[5] || "", answers[6] || "", answers[7] || "",
      answers[8] || "", answers[9] || "",
      scores.connaissance || "", scores.usage || "", scores.confiance || "",
      scores.vision || "", scores.appetence || "",
      data.globalScore || "",
      data.label || ""
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

// --- GET : récupérer les participants d'une session ---
function doGet(e) {
  try {
    var sessionId = (e.parameter && e.parameter.session) ? e.parameter.session : "";
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var lastRow = sheet.getLastRow();

    if (lastRow <= 1) {
      return ContentService.createTextOutput(
        JSON.stringify({ status: "ok", participants: [] })
      ).setMimeType(ContentService.MimeType.JSON);
    }

    var data = sheet.getRange(2, 1, lastRow - 1, 20).getValues();
    var participants = [];

    for (var i = 0; i < data.length; i++) {
      var row = data[i];
      // Filtrer par session si spécifié
      if (sessionId && row[0] !== sessionId) continue;

      participants.push({
        session: row[0],
        name: row[1],
        timestamp: row[2],
        answers: [row[3], row[4], row[5], row[6], row[7], row[8], row[9], row[10], row[11], row[12]],
        scores: {
          connaissance: row[13],
          usage: row[14],
          confiance: row[15],
          vision: row[16],
          appetence: row[17]
        },
        globalScore: row[18],
        label: row[19]
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
