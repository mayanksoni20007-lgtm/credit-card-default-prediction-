from pathlib import Path

import streamlit as st

st.set_page_config(
    page_title="Credit Card Default Prediction",
    page_icon="📊",
    layout="wide",
    initial_sidebar_state="collapsed",
)

PROJECT_DIR = Path(__file__).parent
SITE_DIR = PROJECT_DIR / "website"

html = (SITE_DIR / "index.html").read_text(encoding="utf-8")
css = (SITE_DIR / "styles.css").read_text(encoding="utf-8")
js = (SITE_DIR / "app.js").read_text(encoding="utf-8")

html = html.replace(
    '<link rel="stylesheet" href="styles.css">',
    f"<style>\n{css}\n</style>",
)
html = html.replace('  <script src="app.js" defer></script>\n', "")
html = html.replace(
    "</body>",
    f"<script>\n{js}\n</script>\n</body>",
)

st.iframe(
    html,
    height="content",
    alt="Interactive Credit Card Default Prediction project dashboard",
)
