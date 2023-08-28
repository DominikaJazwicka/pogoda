// Utwórz funkcję konstruktor Country, zawierający informację o nazwie
// państwa, stolicy, ludności i walucie

// Następnie utwórz 3 nowe państwa na bazie konsturktora

// Dodaj metodę do konstruktora, która wyświetla informacje o państwie

// Dodaj metodę, która porównuje liczbę ludności dwóch krajów i wyświetla
// w konsoli informację, który ma więcej mieszkańców

function Country(name, capital, population, currency) {
    this.name = name;
    this.capital = capital;
    this.population = population;
    this.currency = currency;
}

Country.prototype.showCountry = function() {
    console.log("Nazwa " + this.name)
}

Country.prototype.type = "Państwo"

const country1 = new Country("Japonia", "Tokio", 125700000, "yen")
const country2 = new Country("Polska", "Warszawa", 37000000, "pln")
const country3 = new Country("Niemcy", "Berlin", 83000000, "eu")

console.log(country1)