"use strict";
const playerDiv = document.getElementById("playerID");
const enemyDiv = document.getElementById("enemyID");
const phokemonAll = [...document.getElementById("phokemonID").children];
const playerSystemDiv = document.getElementById("playerSystemID");
const enemySystemDiv = document.getElementById("enemySystemID");

class phokemonClass {
    constructor(name, type, moves) {
        this.name = name;
        this.type = type;
        this.moves = moves;
    }
}

const planthing = new phokemonClass("planthing", "grass", ["defend", "vine whip"]);
const elgaloo = new phokemonClass("elgaloo", "electric", ["defend", "taser hit"]);
const watortoise = new phokemonClass("watortoise", "water", ["defend", "water slap"]);
const salafire = new phokemonClass("salafire", "fire", ["defend", "fire punch"]);

function phokemonIsSelected() {
    return playerDiv.hasChildNodes() && playerSystemDiv.hasChildNodes();
}

phokemonAll.forEach((eachPhokemon) => {
    eachPhokemon.onmouseover = function() {
        eachPhokemon.style.filter = "brightness(175%)";
    };
    eachPhokemon.onmouseout = function() {
        eachPhokemon.style.filter = "brightness(100%)";
    };

    eachPhokemon.onclick = function(phokemon) {
        const assignStringNames = {
            planthing: planthing,
            elgaloo: elgaloo,
            watortoise: watortoise,
            salafire: salafire,
        };

        const selectedPhokemon = assignStringNames[phokemon.target.id];

        const phokemonClone = eachPhokemon.cloneNode(false);
        phokemonClone.setAttribute("style", `width: 75%; filter: brightness(100%);`);

        for (const items of selectedPhokemon.moves) {
            const createButtons = document.createElement("button");
            createButtons.innerHTML = items;

            if (phokemonIsSelected()) {
                playerSystemDiv.replaceChildren(document.querySelector("button"), createButtons);
                console.log(items);
            } else {
                playerSystemDiv.appendChild(createButtons);
                console.log(items);
            }
        }

        phokemonIsSelected() ? playerDiv.replaceChildren(phokemonClone) : playerDiv.appendChild(phokemonClone);
    };
    eachPhokemon.onmousedown = function() {
        eachPhokemon.style.filter = "brightness(75%)";
    };
});
