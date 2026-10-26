# Credit Card Default Prediction — Streamlit app

This Streamlit wrapper displays the existing responsive dashboard and its interactive model-metric selector. It embeds the local HTML page, CSS, and JavaScript, so no external web assets or model files are required.

## Deploy on Streamlit Community Cloud

1. Create a GitHub repository and upload this project's files, keeping `streamlit_app.py` and `requirements.txt` at the repository root.
2. Go to https://share.streamlit.io and sign in with GitHub.
3. Select **Create app**, then choose the repository, branch, and `streamlit_app.py` as the entrypoint.
4. Deploy. Streamlit Community Cloud will install the pinned dependency from `requirements.txt` and provide an app URL.

Official docs: https://docs.streamlit.io/deploy/streamlit-community-cloud/deploy-your-app/deploy

The dashboard shows the metrics recorded in the supplied notebook. It does not train or load a model, and it does not score new customers.
