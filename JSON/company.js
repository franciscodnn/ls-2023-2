// const company = {
//     name: "",
//     founded: 0,
//     industry: ""
// }

class Company {
    constructor(companyName, yearOfFoundation, industry){
        this.name = companyName;
        this.founded = yearOfFoundation;
        this.industry = industry;
    }

    // função para calcular o tempo de criação
    obterExistencia() {
        const anoAtual = new Date();
        return anoAtual.getFullYear() - this.founded;
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }
}

export default Company;

// const amazon = new Company("Amazon", 1994, "E-commerce"); // name = "Amazon", founded = 1994, industry = "E-commerce"
// // amazon.name = "Amazon";
// // amazon.founded = 1994;
// // amazon.industry = "E-commerce";

// const facebook = new Company("Facebook", 2004, "Social");
// const alphabet = new Company("Alphabet Inc.", 2015, "Search");

// Company.prototype.kind = "Internet Company";

// console.log(amazon.obterExistencia());

// amazon.name

// console.log(amazon.getName());
// amazon.setName('AWS');