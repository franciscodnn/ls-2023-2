// 1) obter os objetos JS - data.js
import data from './data.js';
import createCardView from './components/InvestmentCard.js';

// Obter div de visualização dos cards
const containerInvestments = document.querySelector('#container-investments');

// 2) Para cada objeto JS, criar sua visualização
// 2.1) do arquivo InvestmentCard.js
// 3) Inserir essa visualização na div do Investment App
// 3.1) inserir no index.html
data.forEach(
    (investment) => {
        const cardView = createCardView(investment);
        containerInvestments.insertAdjacentHTML('beforeend', cardView);
    }
);
