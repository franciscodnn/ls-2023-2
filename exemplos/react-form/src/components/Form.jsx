'use client'

import { useState } from 'react';

export default function Form({ titulo }){
    const [nome, setNome] = useState(''); // nome = ''
    const [idade, setIdade] = useState(0);
    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');

    // nome = 'Francisco'

    function handleChangeNome(event) {
        setNome(event.target.value);

        console.log(event.target.name);
    }

    function handleChangeIdade(event) {
        setIdade(event.target.value);
    }

    function handleChangeLogin(event) {
        setLogin(event.target.value);
    }

    function handleChangeSenha(event) {
        setSenha(event.target.value);
    }

    return (
        <>
        <h2>{ titulo }</h2>
        <form>
            <div>
                <label htmlFor="nome">Nome:</label>
                <input id="nome" type="text" 
                  name="nome" 
                  value={ nome } 
                  onChange={ handleChangeNome }/>
            </div>
            <div>
                <label htmlFor="idade">Idade:</label>
                <input id="idade" type="text" name="idade"
                value={ idade }
                onChange={ handleChangeIdade } />
            </div>
            <div>
                <label htmlFor="login">login:</label>
                <input id="login" type="text" name="login"
                value={ login }
                onChange={ handleChangeLogin } />
            </div>
            <div>
                <label htmlFor="senha">senha:</label>
                <input id="senha" type="password" name="senha"
                value={ senha }
                onChange={ handleChangeSenha } />
            </div>
        </form>
        <p>Valor dos inputs:</p>
        <p>{ nome }</p>
        <p>{ idade }</p>
        <p>{ login }</p>
        <p>{ senha }</p>
        </>
    );
}