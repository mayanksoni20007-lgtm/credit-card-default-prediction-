const modelScores = [
  { name: "Logistic Regression", shortName: "Logistic Reg.", accuracy: 0.8077, precision: 0.6868, recall: 0.2396, auc: 0.7076 },
  { name: "Random Forest", shortName: "Random Forest", accuracy: 0.8148, precision: 0.6530, recall: 0.3474, auc: 0.7563 },
  { name: "XGBoost", shortName: "XGBoost", accuracy: 0.8175, precision: 0.6620, recall: 0.3572, auc: 0.7782 },
];

const metricInfo = {
  auc: { label: "ROC-AUC", description: "Ability to rank defaulters above non-defaulters across thresholds." },
  accuracy: { label: "Accuracy", description: "Share of all test-set predictions that are correct." },
  precision: { label: "Precision", description: "Share of clients flagged as defaulters who actually default." },
  recall: { label: "Recall", description: "Share of actual defaulters the model identifies." },
};

const barContainer = document.querySelector("#metric-bars");
const metricDescription = document.querySelector("#metric-description");
const metricButtons = document.querySelectorAll("[data-metric]");
const formatScore = (value) => value.toFixed(4);

function renderMetric(metric) {
  if (!barContainer || !metricInfo[metric]) return;
  const ranked = [...modelScores].sort((a, b) => b[metric] - a[metric]);
  metricDescription.textContent = metricInfo[metric].description;
  barContainer.replaceChildren();

  ranked.forEach((model, index) => {
    const row = document.createElement("div");
    row.className = `metric-row${index === 0 ? " is-top" : ""}`;
    row.setAttribute("aria-label", `${model.name}: ${metricInfo[metric].label} ${formatScore(model[metric])}`);

    const name = document.createElement("span");
    name.className = "metric-name";
    name.textContent = model.shortName;

    const track = document.createElement("span");
    track.className = "metric-track";
    track.setAttribute("role", "img");
    track.setAttribute("aria-label", `${(model[metric] * 100).toFixed(2)} percent`);

    const fill = document.createElement("i");
    fill.className = "metric-fill";
    fill.style.width = `${model[metric] * 100}%`;
    track.append(fill);

    const value = document.createElement("strong");
    value.className = "metric-value";
    value.textContent = formatScore(model[metric]);

    row.append(name, track, value);
    barContainer.append(row);
  });
}

metricButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const metric = button.dataset.metric;
    metricButtons.forEach((item) => item.setAttribute("aria-pressed", String(item === button)));
    renderMetric(metric);
  });
});

renderMetric("auc");

