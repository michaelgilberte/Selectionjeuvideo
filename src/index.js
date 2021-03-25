import "materialize-css";
import 'nouislider';
import { PreferencesComponent } from "./preferences/preferences.component";
import { putNavBar } from "./shared/navbar"

if (window.cordova) {
  window.document.addEventListener("deviceready", () => {
    new PreferencesComponent();
    putNavBar(document.querySelector("header"));
  });
} else {
  new PreferencesComponent();
  putNavBar(document.querySelector("header"))
}