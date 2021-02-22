import React from 'react';
const dotenv = require('dotenv').config()

import './global.css';

import Routes from './routes';

function App() {
  return (
    <Routes />
  );
}

export default App;

/**
 * Componente no react é uma função que retorna HTML
 * JSX: é quando o html ta contido dentro do javascript
 * Propriedades: atributos repassados para componentes
 * 
 * Componente tipo o "Header.js" tem que começar com letra maiúscula
 * Propriedade no Header (title)
 *    {props.title} e <Header title=""/>
 *    {props.children} e <Header> Semana omnistack</Header>
 * 
 * Fazer botão chamar função:
 *    Cria uma funcao pra ele dentro da função principal
 *    no botão: onClick={<função>}
 *  EXEMPLO de uma função que incrementar um contador:
 *    fora da função: const [counter, setCounter] = useState(0)
 *    dentro da funcao: setCounter(counter + 1)
 *    
 *   
 * Usar estado para atualizar um componente
 *    let <variavel qualquer> = useState
 *        (0) => para numeros
 *        [] => para arrays
 *        ('') => para strings
 * O useState retorna um array com o seguinte conteudo:
 *    Array [valor, funçaoDeAtualizacao]
 *    
 */