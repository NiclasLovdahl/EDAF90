"use strict";
const imported = require("./lib/inventory.js");

// Assignment 4

let result = {
    foundation: "Foundations: ",
    protein: "Proteins: ",
    extra: "Extras: ",
    dressing: "Dressings: "
};

Object.keys(imported.inventory).forEach(key => {
    if ("foundation" in imported.inventory[key]) {
        result.foundation += key + ",";
    } else if ("protein" in imported.inventory[key]) {
        result.protein += key + ",";
    } else if ("extra" in imported.inventory[key]) {
        result.extra += key + ",";
    } else if ("dressing" in imported.inventory[key]) {
        result.dressing += key + ",";
    }
});

console.log(
    result.foundation +
        "\n" +
        result.protein +
        "\n" +
        result.extra +
        "\n" +
        result.dressing
);

// Assingment 5-7

class Salad {
    constructor() {
        this.foundation = [];
        this.proteins = [];
        this.extras = [];
        this.dressing = [];
    }

    add(type, selection) {
        switch (type) {
            case "foundation":
                this.foundation.push(selection);
                break;
            case "proteins":
                this.proteins.push(selection);
                break;
            case "extras":
                this.extras.push(selection);
                break;
            case "dressing":
                this.dressing.push(selection);
                break;
            default:
                console.error("Type not found.");
                break;
        }
    }

    remove(type, selection) {
        switch (type) {
            case "foundation":
                this.foundation.splice(foundation.indexOf(selection, 1));
                break;
            case "proteins":
                this.proteins.splice(proteins.indexOf(selection, 1));
                break;
            case "extras":
                this.extras.splice(extras.indexOf(selection, 1));
                break;
            case "dressing":
                this.dressing.splice(dressing.indexOf(selection, 1));
                break;
            default:
                console.error("Type not found.");
                break;
        }
    }

    price() {
        return this.foundation
            .concat(this.proteins, this.extras, this.dressing)
            .reduce((acc, curr) => {
                return (acc += imported.inventory[curr].price);
            }, 0);
    }
}

let mySalad = new Salad();
mySalad.add("foundation", "Salad + Glasnudlar");
mySalad.add("proteins", "Handskalade räkor från Smögen");
mySalad.add("extras", "Krossade jordnötter");
mySalad.add("extras", "Parmesan");
mySalad.add("dressing", "Kimchimayo");
console.log(mySalad.price());
