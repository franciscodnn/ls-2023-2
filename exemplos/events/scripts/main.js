// document.querySelector('button').addEventListener('click', handleBtnClick);
// document.querySelector('button').addEventListener('click', handleBtnClick2);

document.querySelector('button').onclick = handleBtnClick;
document.querySelector('form').onkeydown = (event) => {
    if(event.key === 'Escape'){
        cleanForm();
    } else if(event.key === 'Enter'){
        handleBtnClick();
    }
}
// document.querySelector('button').onclick = handleBtnClick2;

function cleanForm(){
    const nomeCompleto = document.querySelector('input[name="nome-completo"]');
    const idade = document.querySelector('input[name="idade"]');
    const curso = document.querySelector('input[name="curso"]');

    nomeCompleto.value = "";
    idade.value = "";
    curso.value = "";
}

/*
tratar o evento de clique no botão
*/
function handleBtnClick(){
    const nomeCompleto = document.querySelector('input[name="nome-completo"]');
    const idade = document.querySelector('input[name="idade"]');
    const curso = document.querySelector('input[name="curso"]');
    const sexo = document.querySelector('input[name="sexo"]:checked');

    const h3 = document.querySelector('h3');

    h3.classList.add('idade-correta');
    h3.classList.remove('idade-incorreta');
    if(idade.value < 0 || idade.value > 150){
        h3.classList.remove('idade-correta');
        h3.classList.add('idade-incorreta');
    }   

    h3.innerHTML = `${nomeCompleto.value}; ${idade.value}; ${curso.value}; ${sexo.value}`;
    nomeCompleto.value = "";
    idade.value = "";
    curso.value = "";
}

function handleBtnClick2(){
    window.alert('Botão clicado!');
}