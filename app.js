// getData fetch'er (henter) data fra https://dummyjson.com/users (test i browser)
// https://dummyjson.com/ er en API hvor man kan tilgå testdata
// fx https://dummyjson.com/users, https://dummyjson.com/posts eller https://dummyjson.com/products
function getData() {
    fetch("https://dummyjson.com/users") // fetch'er/ henter fra data fra https://dummyjson.com/users
        .then(response => response.json()) // laver data om fra JSON til JavaScript data (objekter og arrays)
        .then(data => {
            console.log(data); // logger data i console
            displayData(data.users); // kalder displayData-funktionen med listen/array af users
        }); // dette er et eksempel på asynkron kode, da vi med "then" venter på at data er hentet og JSON er lavet om til JavaScript
}

// På baggrund af en liste af users, tilføjer displayData tilføjer ny HTML til DOM'en
// listOfUsers er et funktionsparameter.
// I getData kan man se hvordan listen af users bliver sendt med som parameter
function displayData(listOfUsers) {
    // for loop til at gennemløbe listOfUsers
    for (let index = 0; index < listOfUsers.length; index++) {
        const user = listOfUsers[index]; // en const til at holde én bruger for hvert gennemløb. Prøv evt. at logge user.
        // DOM-manipulation: Tilføjer/ indsætter ny HTML - et article-tag for hver user
        // De nye article-tags indsættes i #users-grid (se index.html).
        // Dvs at vi udvælger et eksisterende element fra DOM'en ("Selecting elements") og indsætter noget nyt HTML i det.
        // Dette er også et eksempel på "Inserting Elements" med template string/ backticks ``
        document.querySelector("#users-grid").innerHTML += /*html*/ `
            <article>
                <img src="${user.image}"/>
                <p>${user.age} years old</p>
            </article>
        `;
        // user.image, user.firstName, user.lastName og user.age er properties på user-objekterne.
        // Se i loggen for alle properties - man kan tilføje flere
    }
}

// kalder funktionen getData for at igangsætte det hele
// dvs JavaScript loades -> getData kaldes -> getData fetch'er data
// -> getData kalder displayData -> displayData tilføjer/ indsætter HTML i DOM
getData();
