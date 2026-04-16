let sections = [];
let media = [];

function addSection() {
    const container = document.getElementById("sections");

    const div = document.createElement("div");

    div.innerHTML = `
        <input placeholder="Category name">
        <textarea placeholder="Text"></textarea>
    `;

    container.appendChild(div);
}

function addMedia() {
    const url = prompt("Enter file URL:");
    if (!url) return;

    media.push(url);

    const list = document.getElementById("mediaList");
    const item = document.createElement("p");
    item.textContent = url;
    list.appendChild(item);
}

function saveCharacter() {
    const name = document.getElementById("name").value;
    const desc = document.getElementById("desc").value;
    const image = document.getElementById("image").value;

    const sectionNodes = document.querySelectorAll("#sections div");

    const sectionsData = [];

    sectionNodes.forEach(div => {
        const inputs = div.querySelectorAll("input, textarea");
        sectionsData.push({
            title: inputs[0].value,
            text: inputs[1].value
        });
    });

    const character = {
  name,
  theme,
  quote,
  tabs: [],
  infobox: [],
  sections: [],
  media: []
};

    let characters = JSON.parse(localStorage.getItem("characters")) || [];

// dodaj ID
data.id = Date.now();

// dodaj do listy
characters.push(data);

// zapisz całość
localStorage.setItem("characters", JSON.stringify(characters));

// przejdź do strony
window.location.href = "view.html?id=" + data.id;

    window.location.href = "view.html";
}