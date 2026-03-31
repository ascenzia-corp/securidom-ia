// =============================================================
// CHARTS — Helpers Chart.js partagés
// =============================================================

import { AXES, MATURITY_LABELS } from "./scoring.js";

// Couleurs de la charte
const TEAL = "#52BEC0";
const TEAL_LIGHT = "rgba(82, 190, 192, 0.3)";
const TEAL_VERY_LIGHT = "rgba(82, 190, 192, 0.08)";
const GOLD = "#DDAC63";
const GOLD_LIGHT = "rgba(221, 172, 99, 0.3)";
const GRID_COLOR = "#4A5568";
const LABEL_COLOR = "#EBEBEE";

// Crée un radar chart individuel (page result)
export function createRadarChart(ctx, scores, label = "Mon profil") {
  const labels = AXES.map((a) => a.label);
  const data = AXES.map((a) => scores[a.id] || 0);

  return new Chart(ctx, {
    type: "radar",
    data: {
      labels,
      datasets: [
        {
          label,
          data,
          backgroundColor: TEAL_LIGHT,
          borderColor: TEAL,
          borderWidth: 2,
          pointBackgroundColor: TEAL,
          pointBorderColor: TEAL,
          pointRadius: 5
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      scales: {
        r: {
          beginAtZero: true,
          min: 0,
          max: 5,
          ticks: {
            stepSize: 1,
            color: LABEL_COLOR,
            backdropColor: "transparent",
            font: { size: 11 }
          },
          grid: { color: GRID_COLOR },
          angleLines: { color: GRID_COLOR },
          pointLabels: {
            color: LABEL_COLOR,
            font: { size: 13, family: "'Telegraf', 'Inter', sans-serif" }
          }
        }
      },
      plugins: {
        legend: { display: false }
      },
      animation: { duration: 800, easing: "easeOutQuart" }
    }
  });
}

// Crée le radar chart du dashboard (radars individuels superposés + moyenne)
export function createGroupRadarChart(ctx, participantsData, averageScores) {
  const labels = AXES.map((a) => a.label);
  const datasets = [];

  // Chaque participant en teal très léger
  participantsData.forEach((p, i) => {
    datasets.push({
      label: p.name || `P${i + 1}`,
      data: AXES.map((a) => p.scores[a.id] || 0),
      backgroundColor: TEAL_VERY_LIGHT,
      borderColor: "rgba(82, 190, 192, 0.15)",
      borderWidth: 1,
      pointRadius: 0
    });
  });

  // Moyenne du groupe en or plein
  datasets.push({
    label: "Moyenne du groupe",
    data: AXES.map((a) => averageScores[a.id] || 0),
    backgroundColor: GOLD_LIGHT,
    borderColor: GOLD,
    borderWidth: 3,
    pointBackgroundColor: GOLD,
    pointBorderColor: GOLD,
    pointRadius: 5
  });

  return new Chart(ctx, {
    type: "radar",
    data: { labels, datasets },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      scales: {
        r: {
          beginAtZero: true,
          min: 0,
          max: 5,
          ticks: {
            stepSize: 1,
            color: LABEL_COLOR,
            backdropColor: "transparent",
            font: { size: 11 }
          },
          grid: { color: GRID_COLOR },
          angleLines: { color: GRID_COLOR },
          pointLabels: {
            color: LABEL_COLOR,
            font: { size: 14, family: "'Telegraf', 'Inter', sans-serif", weight: "bold" }
          }
        }
      },
      plugins: {
        legend: { display: false }
      },
      animation: { duration: 600, easing: "easeOutQuart" }
    }
  });
}

// Crée le bar chart de distribution des profils
export function createDistributionChart(ctx, distribution) {
  const gradient = ctx.createLinearGradient(0, 0, 0, 300);
  gradient.addColorStop(0, TEAL);
  gradient.addColorStop(1, GOLD);

  return new Chart(ctx, {
    type: "bar",
    data: {
      labels: MATURITY_LABELS,
      datasets: [
        {
          data: distribution,
          backgroundColor: [
            "rgba(82, 190, 192, 0.4)",
            "rgba(82, 190, 192, 0.6)",
            "rgba(82, 190, 192, 0.8)",
            "rgba(221, 172, 99, 0.7)",
            "rgba(221, 172, 99, 1)"
          ],
          borderColor: "transparent",
          borderRadius: 6,
          barThickness: 36
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            stepSize: 1,
            color: LABEL_COLOR,
            font: { size: 12 }
          },
          grid: { color: "rgba(74, 85, 104, 0.3)" }
        },
        x: {
          ticks: {
            color: LABEL_COLOR,
            font: { size: 11, family: "'Telegraf', 'Inter', sans-serif" }
          },
          grid: { display: false }
        }
      },
      plugins: {
        legend: { display: false }
      },
      animation: { duration: 600 }
    }
  });
}
