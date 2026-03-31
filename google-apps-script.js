/**
 * Google Apps Script — Webhook pour le quiz Sécuridom × Ascenzia
 *
 * Instructions :
 * 1. Créez un Google Spreadsheet vierge
 * 2. Allez dans Extensions > Apps Script
 * 3. Collez ce code
 * 4. Déployez en tant que "Application Web"
 *    - Exécuter en tant que : Moi
 *    - Accès : Tout le monde
 * 5. Copiez l'URL de déploiement → variable d'environnement Vercel
 */

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);

    // Create headers on first row if sheet is empty
    if (sheet.getLastRow() === 0) {
      var headers = [
        "Timestamp",
        "Nom",
        "Email",
        "Poste",
        "Usage IA",
        "Outils IA",
        "Sentiment IA",
        "Crainte IA",
        "Tâche répétitive 1",
        "Tâche répétitive 2",
        "Tâche stratégique 1",
        "Tâche stratégique 2",
        "Vision directeur 3 ans",
        "Attentes formation",
      ];
      sheet.appendRow(headers);

      // Style headers
      var headerRange = sheet.getRange(1, 1, 1, headers.length);
      headerRange.setFontWeight("bold");
      headerRange.setBackground("#DDAC63");
      headerRange.setFontColor("#1A202C");
    }

    // Append data row
    var row = [
      data.timestamp || new Date().toISOString(),
      data.nom || "",
      data.email || "",
      data.poste || "",
      data.usage_ia || "",
      Array.isArray(data.outils_ia) ? data.outils_ia.join(", ") : (data.outils_ia || ""),
      data.sentiment_ia || "",
      data.crainte_ia || "",
      data.tache_repetitive_1 || "",
      data.tache_repetitive_2 || "",
      data.tache_strategique_1 || "",
      data.tache_strategique_2 || "",
      data.vision_directeur_3ans || "",
      Array.isArray(data.attentes_formation) ? data.attentes_formation.join(", ") : (data.attentes_formation || ""),
    ];

    sheet.appendRow(row);

    // Auto-resize columns
    for (var i = 1; i <= row.length; i++) {
      sheet.autoResizeColumn(i);
    }

    return ContentService.createTextOutput(
      JSON.stringify({ status: "success" })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({ status: "error", message: error.toString() })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService.createTextOutput(
    JSON.stringify({ status: "ok", message: "Quiz webhook is active" })
  ).setMimeType(ContentService.MimeType.JSON);
}
