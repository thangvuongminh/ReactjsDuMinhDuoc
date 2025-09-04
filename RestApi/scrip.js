// xmlRequest
// const xhttp = new XMLHttpRequest();
const country = document.querySelector(".countries");
// xhttp.onreadystatechange = () => {
//     if (xhttp.readyState == 4 && xhttp.status == 200) {
//         const [data] = JSON.parse(xhttp.responseText);
//         console.log(data);
//         const textHtml = `
//                 <article class="country">
//               <img class="country__img" src="${data.flag}" />
//               <div class="country__data">
//                 <h3 class="country__name">${data.name}</h3>
//                 <h4 class="country__region">${data.region}</h4>
//                 <p class="country__row"><span>👫</span>${data.population}</p>
//                 <p class="country__row"><span>🗣️</span>${data.demonym}</p>
//                 <p class="country__row"><span>💰</span>${data.gini}</p>
//               </div>
//             </article>`;
//         country.insertAdjacentHTML("afterbegin", textHtml);
//         country.style.opacity = 1;
//     }
// };
// xhttp.open("GET", "https://restcountries.com/v2/name/vietnam", true);
// xhttp.send();

// fetch Api  use PROMISE
// Fetch chỉ có thể dùng then ko dùng được catch tức là chỉ có resolve chứ ko có reject
// muốn sử dụng đc tài nguyên res phải then() lần thứ 2 VA o then đầu tiên return về res.json
const textHtml = (data) => {
    const textTest = `
                <article class="country">
              <img class="country__img" src="${data.flag}" />
              <div class="country__data">
                <h3 class="country__name">${data.name}</h3>
                <h4 class="country__region">${data.region}</h4>
                <p class="country__row"><span>👫</span>${data.population}</p>
                <p class="country__row"><span>🗣️</span>${data.demonym}</p>
                <p class="country__row"><span>💰</span>${data.gini}</p>
              </div>
            </article>`;
    return textTest;
};
fetch("https://restcountries.com/v2/name/vietnam")
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        const ans = textHtml(data[0]);
        country.insertAdjacentHTML("beforeend", ans);
        country.style.opacity = 1;
    });
// muốn kiểm tra lỗi với fetch thì
let nameOfCountry = "span";
fetch(`https://restcountries.com/v2/name/${nameOfCountry}`)
    .then((res) => {
        if (res.status == 404) {
            throw new Error("Error appear");
        }
        return res.json();
    })
    .then((data) => {
        const ans = textHtml(data[0]);
        country.insertAdjacentHTML("beforeend", ans);
        country.style.opacity = 1;
    });

// Axios
// axios
//     .get(`https://restcountries.com/v2/name/vietnam1`)
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((error) => {
//         console.warn(error);
//     });

//  axios config
axios({
    method: "get",
    baseURL: `https://restcountries.com`,
    url: "/v2/name/russia",
}).then((data) => {
    console.log(data);
});

// dung instance
const http = axios.create({
    baseURL: `https://restcountries.com`,
});
http.get("/v2/name/ukraine")
    .then((res) => {
        console.log(res);
    })
    .catch((error) => {
        throw new Error("cut");
    });

// can thiệp khi request và response
http.interceptors.request.use((config) => {
    return config;
}),
    (error) => {
        return Promise.reject(error);
    };
http.interceptors.response.use((config) => {
    console.log(config.data[0].capital);
    return config;
}),
    (error) => {
        return Promise.reject(error);
    };
http.get("/v2/name/brazil")
    .then((res) => {
        console.log(res);
    })
    .catch((error) => {
        throw new Error("cut");
    });
