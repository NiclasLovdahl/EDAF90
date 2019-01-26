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
