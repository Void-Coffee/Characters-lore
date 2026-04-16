const contentsBox = document.getElementById("contentsBox");
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const characters = JSON.parse(localStorage.getItem("characters")) || [];

const data = characters.find(c => c.id == id);

if (!data) {
    document.body.innerHTML = "<h1>Character not found</h1>";
}
document.body.style.setProperty("--accent-purple", data.theme.main);
document.body.style.setProperty("--accent-pink", data.theme.accent);

// TITLE
content.innerHTML = `<h1>${data.name}</h1>`;

// QUOTE
if(data.quote){
    content.innerHTML += `
    <div class="quote">
        "${data.quote}"
    </div>`;
}

// TABS
const tabsDiv = document.getElementById("tabs");
const tabContent = document.getElementById("tabContent");

data.tabs.forEach((tab, i) => {
    const btn = document.createElement("button");
    btn.textContent = tab.title;

    btn.onclick = () => {
        tabContent.innerHTML = `<p>${tab.content}</p>`;
    };

    tabsDiv.appendChild(btn);
});

// SECTIONS
let contentsHTML = "<h3>Contents</h3>";

data.sections.forEach((sec, index) => {

    const id = "section-" + index;

    // CONTENTS LINK
    contentsHTML += `<a href="#${id}">${sec.title}</a>`;

    // SEKCJA NA STRONIE
    content.innerHTML += `
        <h2 id="${id}">${sec.title}</h2>
        <p>${sec.content}</p>
    `;
});

contentsBox.innerHTML = contentsHTML;

// INFOBOX
infobox.innerHTML = `<img src="${data.image}">`;

data.infobox.forEach(item => {
    infobox.innerHTML += `<p><strong>${item.label}:</strong> ${item.value}</p>`;
});

// ICONS
data.icons.forEach(icon => {
    infobox.innerHTML += `<img src="${icon}" style="width:40px;">`;
});