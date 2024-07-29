// Theme toggling
const themeToggle = document.querySelector("#theme-input");
const themeState = localStorage.getItem("themeState") == "true";

const setTheme = () => {
  document.documentElement.setAttribute("data-theme", themeToggle.checked ? "light" : "dark");
};

themeToggle.addEventListener("change", () => {
  setTheme();
  localStorage.setItem("themeState", themeToggle.checked);
});

themeToggle.checked = themeState;
setTheme();

// Email stuff (bot prevention)
// 07/2024: No longer used (scrape away!)
const copy = () => {
  let m = getString();
  navigator.clipboard.writeText(m).then(() => {
    // alert("Copied email address to the clipboard!");
  });
};

const getString = () => {
  // Hide email in hex format
  let x = "006c0065006500760069002e00730065007000700061006c0061003100400067006d00610069006c002e0063006f006d";
  return x.match(/.{1,4}/g).reduce((result, hex) => result + String.fromCharCode(parseInt(hex, 16)), "");
};
