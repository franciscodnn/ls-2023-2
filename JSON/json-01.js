import show from './lib.js';
import Company from './company.js';

const company = {
    name: "",
    founded: 0,
    industry: ""
}

company.kind = "Internet Company";

const amazon = { ...company };
const facebook = { ...company };
const alphabet = { ...company };

amazon.name = "Amazon";
amazon.founded = 1994;
amazon.industry = "E-Commerce, Cloud";

facebook.name = "Facebook";
facebook.founded = 2004;
facebook.industry = "Social";

alphabet.name = "Alphabet Inc.";
alphabet.founded = 2015;
alphabet.industry = "Search, Cloud, Advertising";

console.log(company);
console.log(amazon.kind);

const arrayCompanies = [];
arrayCompanies.push(amazon);
arrayCompanies.push(facebook);
arrayCompanies.push(alphabet);



const microsoft = new Company('Microsoft', 1978, 'OS');
arrayCompanies.push(microsoft);

show(arrayCompanies);