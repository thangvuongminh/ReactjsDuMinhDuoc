// AJax aPI
// const country = document.querySelector(".countries");
// const getCountryMain = (nameCountry) => {
//     const getRenderCountry = new XMLHttpRequest();
//     getRenderCountry.open(
//         "GET",
//         `https://restcountries.com/v2/name/${nameCountry}`
//     );

//     getRenderCountry.send();
//     getRenderCountry.addEventListener("load", (nameCountry) => {
//         const [data] = JSON.parse(getRenderCountry.responseText);
//         const textHtml = `
//             <article class="country">
//           <img class="country__img" src="${data.flag}" />
//           <div class="country__data">
//             <h3 class="country__name">${data.name}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${data.population}</p>
//             <p class="country__row"><span>🗣️</span>${data.demonym}</p>
//             <p class="country__row"><span>💰</span>${data.gini}</p>
//           </div>
//         </article>
//     `;
//         country.insertAdjacentHTML("beforeend", textHtml);
//         country.style.opacity = 1;
//     });
// };
// getCountryMain("vietnam");
// getCountryMain("belgium");
// getCountryMain("china");

// *******************************************************************

// in the event appear country then appear nextCountry
// const country = document.querySelector(".countries");
// const getCountryMain = (nameCountry) => {
//     const getRenderCountry = new XMLHttpRequest();
//     getRenderCountry.open(
//         "GET",
//         `https://restcountries.com/v2/name/${nameCountry}`
//     );
//     getRenderCountry.send();
//     getRenderCountry.addEventListener("load", (nameCountry) => {
//         const [data] = JSON.parse(getRenderCountry.responseText);
//         const textHtml = `
//             <article class="country">
//           <img class="country__img" src="${data.flag}" />
//           <div class="country__data">
//             <h3 class="country__name">${data.name}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${data.population}</p>
//             <p class="country__row"><span>🗣️</span>${data.demonym}</p>
//             <p class="country__row"><span>💰</span>${data.gini}</p>
//           </div>
//         </article>
//     `;
//         country.insertAdjacentHTML("beforeend", textHtml);
//         country.style.opacity = 1;
//         const [neighbours] = data.borders;
//         if (!neighbours) return;
//         const getRenderCountry2 = new XMLHttpRequest();
//         getRenderCountry2.open(
//             "GET",
//             `https://restcountries.com/v2/alpha/${neighbours}`
//         );
//         getRenderCountry2.send();
//         getRenderCountry2.addEventListener("load", (neighbours) => {
//             const data2 = JSON.parse(getRenderCountry2.responseText);
//             console.log(data2);
//             const textHtml2 = `
//             <article class="country">
//           <img class="country__img" src="${data.flag}" />
//           <div class="country__data">
//             <h3 class="country__name">${data2.name}</h3>
//             <h4 class="country__region">${data2.region}</h4>
//             <p class="country__row"><span>👫</span>${data2.population}</p>
//             <p class="country__row"><span>🗣️</span>${data2.demonym}</p>
//             <p class="country__row"><span>💰</span>${data2.gini}</p>
//           </div>
//         </article>
//     `;
//             country.insertAdjacentHTML("beforeend", textHtml2);
//         });
//     });
// };
// getCountryMain("vietnam");

// ************************
/* if country => country => country .... n(country)
=> the code will difficult see 
so  promise will born so that resolve problem them */

// demo Promise
// const testPromise = new Promise((resolve, reject) => {
//     reject("hello");
// });
// testPromise
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((data) => {
//         console.log(data + "error");
//     });

// Promise with render country
function textHtml(data) {
    const textHtml = `
            <article class="country">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${data.population}</p>
            <p class="country__row"><span>🗣️</span>${data.demonym}</p>
            <p class="country__row"><span>💰</span>${data.gini}</p>
          </div>
        </article>
    `;
    country.insertAdjacentHTML("beforeend", textHtml);
    country.style.opacity = 1;
}
const country = document.querySelector(".countries");
const getCountryMain = (nameCountry, resolve) => {
    const getRenderCountry = new XMLHttpRequest();
    getRenderCountry.open(
        "GET",
        `https://restcountries.com/v2/name/${nameCountry}`
    );
    getRenderCountry.send();
    getRenderCountry.addEventListener("load", (nameCountry) => {
        const [data] = JSON.parse(getRenderCountry.responseText);
        resolve(data);
    });
};
const testPromise = new Promise((resolve, reject) => {
    getCountryMain("vietnam", resolve);
});
const testPromise2 = new Promise((resolve, reject) => {
    getCountryMain("china", resolve);
});
const testPromise3 = new Promise((resolve, reject) => {
    getCountryMain("russia", resolve);
});
const testPromise4 = new Promise((resolve, reject) => {
    getCountryMain("usa", resolve);
});
/*
testPromise
    .then((data) => {
        textHtml(data);
        return testPromise2;
    })
    .then((data2) => {
        textHtml(data2);
        return testPromise3;
    })
    .then((data3) => {
        textHtml(data3);
        return testPromise4;
    })
    .then((data3) => {
        textHtml(data3);
    });
*/

////   way quickly by use  async await
const executeAsync = async () => {
    const response = await testPromise;
    textHtml(response);
    const response1 = await testPromise2;
    textHtml(response1);
    const response2 = await testPromise3;
    textHtml(response2);
    const response3 = await testPromise4;
    textHtml(response3);
};
executeAsync();
