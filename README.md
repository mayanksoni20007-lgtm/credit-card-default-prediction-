# Credit Card Default Prediction website

A static, responsive results dashboard based on `Credit_Card_Default_Prediction.ipynb`.

## Open locally

Open `index.html` in a modern browser. The site has no package installation or build step and works without a network connection. The Kaggle dataset link opens externally.

## Files

- `index.html` — page structure and project content
- `styles.css` — responsive layout and styling
- `app.js` — interactive metric selector and model rankings

## Saved notebook results

| Model | Accuracy | Precision | Recall | ROC-AUC |
| --- | ---: | ---: | ---: | ---: |
| Logistic Regression | 0.8077 | 0.6868 | 0.2396 | 0.7076 |
| Random Forest | 0.8148 | 0.6530 | 0.3474 | 0.7563 |
| XGBoost | 0.8175 | 0.6620 | 0.3572 | 0.7782 |

This site reports the saved evaluation. It does not load a trained model or predict for new customers.
