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

class ExtraGreenSalad extends Salad {
    price() {
        return this.foundation
            .concat(this.proteins, this.extras, this.dressing)
            .reduce((acc, curr) => {
                if ("foundation" in imported.inventory[curr]) {
                    return (acc += imported.inventory[curr].price * 1.3);
                } else if ("extra" in imported.inventory[curr]) {
                    return (acc += imported.inventory[curr].price * 0.5);
                } else {
                    return (acc += imported.inventory[curr].price);
                }
            }, 0);
    }
}

let myExtraGreenSalad = new ExtraGreenSalad();

myExtraGreenSalad.add("foundation", "Salad + Glasnudlar");
myExtraGreenSalad.add("proteins", "Handskalade räkor från Smögen");
myExtraGreenSalad.add("extras", "Krossade jordnötter");
myExtraGreenSalad.add("extras", "Parmesan");
myExtraGreenSalad.add("dressing", "Kimchimayo");
console.log(myExtraGreenSalad.price());

/* 
                Prototype chain of ExtraGreenSalad

    Object ------------------------------------------------------
    |                                                           |
    |                                                           |
    V                                                           |
    Salad -----------------------------------                   |
    |                                       |                   |
    |                                       |                   |
    V                                       |                   |
    ExtraGreenSalad ----->  price           |                   |
                            __proto__ ------->  add             |
                                                remove          |
                                                price           |
                                                __proto__ ------->  toString etc...
                                                                    __proto__: null  

*/

class GourmetSalad extends Salad {
    add(type, selection, size = 1) {
        switch (type) {
            case "foundation":
                this.foundation.push({ selection: selection, size: size });
                break;
            case "proteins":
                this.proteins.push({ selection: selection, size: size });
                break;
            case "extras":
                this.extras.push({ selection: selection, size: size });
                break;
            case "dressing":
                this.dressing.push({ selection: selection, size: size });
                break;
            default:
                console.error("Type not found.");
                break;
        }
    }

    remove(type, selection) {
        switch (type) {
            case "foundation":
                this.foundation.splice(
                    this.foundation.findIndex(
                        obj => obj.selection === selection
                    ),
                    1
                );
                break;
            case "proteins":
                this.proteins.splice(
                    this.proteins.findIndex(obj => obj.selection === selection),
                    1
                );
                break;
            case "extras":
                this.extras.splice(
                    this.extras.findIndex(obj => obj.selection === selection),
                    1
                );
                break;
            case "dressing":
                this.dressing.splice(
                    this.dressing.findIndex(obj => obj.selection === selection),
                    1
                );
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
                return (
                    acc + imported.inventory[curr.selection].price * curr.size
                );
            }, 0);
    }
}

let myGourmetSalad = new GourmetSalad();

myGourmetSalad.add("foundation", "Salad + Glasnudlar", 2.5);
myGourmetSalad.add("proteins", "Handskalade räkor från Smögen");
myGourmetSalad.add("extras", "Krossade jordnötter");
myGourmetSalad.add("extras", "Parmesan");
myGourmetSalad.add("dressing", "Kimchimayo");
myGourmetSalad.remove("extras", "Parmesan");
console.log(myGourmetSalad.price());
