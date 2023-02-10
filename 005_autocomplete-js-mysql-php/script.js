document.getElementById("auto-complete").addEventListener("input", function () {
    fetch('getCities.php?name=' + this.value)
        .then((response) => response.json())
        .then((data) => displayOptions(data));
});


function displayOptions(data) {
    let contentDiv = document.getElementById("results");
    let p;

    while (contentDiv.firstChild) {
        contentDiv.removeChild(contentDiv.firstChild);
    }
    for (let i = 0; i < data.length; ++i) {
        p = document.createElement("p");
        p.classList = "m-1 ";
        p.classList += "p-1 ";
        p.classList += "bg-slate-200 ";
        p.innerHTML = data[i];
        contentDiv.appendChild(p);
    }
}