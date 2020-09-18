"use strict";

// Global variable
let _restaurants = [];

// Fetches JSON data from the JSON file categories.json
// fetch('json/cafe.json')
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (jsonData) {
//         console.log(jsonData);
//         _restaurants = jsonData;
//         appendRestaurants(jsonData)
//     });

// Appends JSON data to the DOM
function appendRestaurants(restaurants) {
    let htmlTemplate = "";
    for (let restaurant of restaurants) {
        console.log(restaurant);
        htmlTemplate += /*html*/ `
        <article>
        <a href="#${restaurant.id}"> <img src="${restaurant.img}">
        <h3> ${restaurant.name}</h3></a><img class="hjerte" src="img/heart.png">
        </article>
        `;

    }

    document.querySelector("#restaurants").innerHTML = htmlTemplate;
}