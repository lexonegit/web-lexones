const themeToggle = document.querySelector("#theme-input");
const themeState = localStorage.getItem("themeState") == "true";

const setTheme = () => {
    document.documentElement.setAttribute("theme", themeToggle.checked ? "light" : "dark");
}

themeToggle.addEventListener("change", () => {
    setTheme();
    localStorage.setItem("themeState", themeToggle.checked);
});

themeToggle.checked = themeState;
setTheme();

const copyMail = () => {
    let m = getString();
    navigator.clipboard.writeText(m).then(() => {
        alert("Copied email address to the clipboard!");
    });
}

const getString = () => {
    // In hexadecimal to avoid spam bots from scraping
    let x = "006c0065006500760069002e00730065007000700061006c0061003100400067006d00610069006c002e0063006f006d";
    return x.match(/.{1,4}/g).reduce((result, hex) => result + String.fromCharCode(parseInt(hex, 16)), "");
}

document.querySelector("#email-container").style.display = "flex";