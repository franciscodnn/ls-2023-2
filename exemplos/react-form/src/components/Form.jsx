'use client'

import { useEffect, useState } from 'react';

export default function Form({ titulo }){
    const [nome, setNome] = useState(''); // nome = ''
    const [idade, setIdade] = useState(0);
    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');

    const [contato, setContato] = useState({
        nome: '',
        idade: 18,
        login: '',
        senha: ''
    });

    useEffect(() => {
        if(contato.idade >= 18) console.log('Maior de idade');
        else console.log('Menor de idade');
    }, []);

    // nome = 'Francisco'

    function handleChange(event) {
        setContato({...contato, [event.target.name]: event.target.value});
    }

    /*
    function handleChangeNome(event) {
        setContato({...contato, "nome": event.target.value});
        // setNome(event.target.value);

        console.log(event.target.name);
    }

    function handleChangeIdade(event) {
        setContato( {...contato, "idade": event.target.value});
        // setIdade(event.target.value);
    }

    function handleChangeLogin(event) {
        setLogin(event.target.value);
    }

    function handleChangeSenha(event) {
        setSenha(event.target.value);
    }
    */

    return (
        <>
        <h2>{ titulo }</h2>
        <form>
            <div>
                <label htmlFor="nome">Nome:</label>
                <input id="nome" type="text" 
                  name="nome" 
                  value={ contato.nome } 
                  onChange={ handleChange }/>
            </div>
            <div>
                <label htmlFor="idade">Idade:</label>
                <input id="idade" type="text" name="idade"
                value={ contato.idade }
                onChange={ handleChange } />
            </div>
            <div>
                <label htmlFor="login">login:</label>
                <input id="login" type="text" name="login"
                value={ contato.login }
                onChange={ handleChange } />
            </div>
            <div>
                <label htmlFor="senha">senha:</label>
                <input id="senha" type="password" name="senha"
                value={ contato.senha }
                onChange={ handleChange } />
            </div>
        </form>
        <p>Valor dos inputs:</p>
        <p>{ contato.nome }</p>
        <p>{ contato.idade }</p>
        <p>{ contato.login }</p>
        <p>{ contato.senha }</p>
        </>
    );
}