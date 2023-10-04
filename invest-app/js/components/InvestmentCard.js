function createCardView(investment) {
    return `
    <div id="investment-${investment.id}" class="bg-white shadow-md rounded-lg p-4">
        <div class="flex justify-between items-center">
            <h3 class="text-lg font-semibold text-gray-700">
                ${investment.titulo}
            </h3>
            <p class="text-lg font-semibold text-gray-700">
                R$ ${investment.valor}
            </p>
        </div>
        <div class="mt-4">
            <p class="text-sm text-gray-500">
                <span class="font-bold">Origem:</span>
                ${investment.origem}
            </p>
            <p class="text-sm text-gray-500">
                <span class="font-bold">Categoria:</span>
                ${investment.categoria}
            </p>
            <p class="text-sm text-gray-500">
                <span class="font-bold">Data:</span>
                ${investment.dataCriacao}
            </p>
            <p class="text-sm text-gray-500">
                <span class="font-bold">Taxa:</span>
                ${investment.taxa}
            </p>
        </div>
    </div>
    `;
}

export default createCardView;