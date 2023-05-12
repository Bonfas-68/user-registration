const nameinput = document.querySelector('input[type="text"]');
const country = document.querySelector('.country');
const id = document.querySelector('input[type="number"]');
const lang = document.querySelector(".lang");
const form = document.querySelector(".form-content");
const user = document.querySelector(".user");




form.addEventListener("submit", (e)=>{
    e.preventDefault();

    const nameVal = document.createElement("h2");
    const idVal = document.createElement("div");
    // const countryVal = document.createElement("span");
    // const LangVal = document.createElement("span");
    const p = document.createElement("p");
    const h2 = document.createElement("h2");


    nameVal.textContent= nameinput.value;
    idVal.textContent= id.value;
    // countryVal.textContent= country.value; 
    // LangVal.textContent= lang.value; 



    nameVal.classList.add("user-name")
    idVal.classList.add("icon")
    // countryVal.classList.add("user-country")
    // LangVal.classList.add("user-lang")

    // p.appendChild(countryVal);
    // p.appendChild(LangVal);
    h2.appendChild(nameVal);
    idVal.appendChild(idVal);

    // user.appendChild(p)
    user.appendChild(p)
    user.appendChild(h2)
    user.appendChild(idVal)



})

