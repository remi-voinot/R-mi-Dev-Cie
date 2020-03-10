function bright() {
    var button = document.getElementById("docs-brightness");
    var app = document.getElementById("app");
    if (app.classList.contains("dark")) {
        app.classList.remove("dark")
        button.classList.remove("fa-moon-o");
        button.classList.add("fa-circle")
    } else {
        app.classList.add("dark");
        button.classList.add("fa-moon-o");
        button.classList.remove("fa-circle")
    }

}