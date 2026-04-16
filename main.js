const list = document.getElementById("charactersList");

const characters = JSON.parse(localStorage.getItem("characters")) || [];

characters.forEach(char => {

    const card = document.createElement("a");
    card.href = "view.html?id=" + char.id;
    card.className = "character-card";

    card.innerHTML = `
        <img src="${char.image || 'placeholder.gif'}">
        <h3>${char.name}</h3>
        <p>${char.desc || ''}</p>
    `;

    list.appendChild(card);
});