// // Overview do Javascript

// // Console
// console.log('texto');
// console.error('Essa é uma mensagem de erro.');
// console.warn('Isso é um alerta!');

// // Variaveis
// let x = 10;

// if(true) {
//     let x = 20;
//     console.log(x);
// }

// // Tipos de dados

// // String
// const nome = "Hermann";
// console.log(nome);
// console.log(typeof nome);

// // Number
// let n = 10;
// console.log(n);
// console.log(typeof n);
// n = 15.99;
// console.log(n);
// console.log(typeof n);

// // Bool
// const isOpen = true;
// console.log(isOpen);
// console.log(typeof isOpen);

// // Null
// const a = null;
// console.log(a);
// console.log(typeof a);

// // undefined
// let nada;
// console.log(nada);
// console.log(typeof nada);

// // Array
// const linguagens = ['C++', 50, 'Python', 'JavaScript'];
// console.log(typeof linguagens);
// console.log(linguagens[0]);
// console.log(typeof linguagens[0]);
// console.log(linguagens[1]);
// console.log(typeof linguagens[1]);

// // object literals
// const user = { 
//     username: 'hermann.almeida', 
//     password: '123456',
//     age: 29,
//     name: 'Hermann'
// }

// console.log(user);
// console.log(typeof user);


// // métodos de Strings
// const text = "qualquer um";
// console.log(text.length);
// // Quabrar texto em um conjunto de caracteres
// const textToArray = text.split('quer');
// console.log(textToArray[1]);
// console.log(text.toLocaleUpperCase());

// // Procurar algo dentro de uma string
// console.log(text.indexOf('um'));
// console.log(text.indexOf('abc'));
// console.log(text.charAt(0));
// console.log(text.charAt(text.length - 1));
// console.log(text.slice(2, 4));

// // Mais sobre arrays
// const chars = ['AAA', 'B', 'C', 'D', 88];
// console.log(chars.length);
// console.log(chars[chars.length - 1]);
// chars[5] = 'F';
// console.log(chars);
// chars.push('H');
// console.log(chars);
// chars.pop();
// chars.pop();
// console.log(chars);
// chars.unshift('VV');
// console.log(chars);

// atividade ==================================================================

const num1 = new FormData(document.querySelector('form'));
const inputValue1 = num1.get("num1");
console.log(inputValue1);

const num2 = new FormData(document.querySelector('form'));
const inputValue2 = num2.get("num2");
console.log(inputValue2);

const soma = inputValue1 + inputValue2;
console.log(soma);
const subtracao = inputValue1 - inputValue2;
console.log(subtracao);
const multiplicacao = inputValue1 * inputValue2;
console.log(multiplicacao);
const divisao = inputValue1 / inputValue2;
console.log(divisao);
    
//  ===========================================================================
