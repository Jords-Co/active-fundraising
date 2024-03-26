import { skipToMainContent } from "$digerati/skipToMainContent";
import { headingUnderlines } from "$digerati/headingUnderlines";

window.Webflow || [];
window.Webflow.push(() => {
  /* Prevent FOUT */
  document.body.classList.add('webflow-loaded');
  skipToMainContent();
  headingUnderlines();
});