const t = document.querySelector("#theme-input");
const s = localStorage.getItem("themeState") == 'true';

t.checked = s;
setTheme();

t.addEventListener("change", () => {
    setTheme();
    localStorage.setItem("themeState", t.checked);
});

function setTheme() {
    document.documentElement.setAttribute("theme", t.checked ? "dark" : "light");
}