document.querySelector(".viz").addEventListener("click", () => {
    if (document.querySelector("ul").style.display != "block") { document.querySelector("ul").style.display = "block"; }
    else {
        document.querySelector("ul").style.display = "none"
    }
})