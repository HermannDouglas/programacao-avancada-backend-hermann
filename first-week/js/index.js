// Overview do Javascript

// Console
console.log('texto');
console.error('Essa é uma mensagem de erro.');
console.warn('Isso é um alerta!');

// Variaveis
let x = 10;

if(true) {
    let x = 20;
    console.log(x);
}

// Tipos de dados

// String
const nome = "Hermann";
console.log(nome);
console.log(typeof nome);

// Number
let n = 10;
console.log(n);
console.log(typeof n);
n = 15.99;
console.log(n);
console.log(typeof n);

// Bool
const isOpen = true;
console.log(isOpen);
console.log(typeof isOpen);

// Null
const a = null;
console.log(a);
console.log(typeof a);

// undefined
let nada;
console.log(nada);
console.log(typeof nada);

// Array
const linguagens = ['C++', 50, 'Python', 'JavaScript'];
console.log(typeof linguagens);
console.log(linguagens[0]);
console.log(typeof linguagens[0]);
console.log(linguagens[1]);
console.log(typeof linguagens[1]);

// object literals
const user = { 
    username: 'hermann.almeida', 
    password: '123456',
    age: 29,
    name: 'Hermann'
}

console.log(user);
console.log(typeof user);


// métodos de Strings
const text = "qualquer um";
console.log(text.length);
// Quabrar texto em um conjunto de caracteres
const textToArray = text.split('quer');
console.log(textToArray[1]);
console.log(text.toLocaleUpperCase());

// Procurar algo dentro de uma string
console.log(text.indexOf('um'));
console.log(text.indexOf('abc'));
console.log(text.charAt(0));
console.log(text.charAt(text.length - 1));
console.log(text.slice(2, 4));

// Mais sobre arrays
const chars = ['AAA', 'B', 'C', 'D', 88];
console.log(chars.length);
console.log(chars[chars.length - 1]);
chars[5] = 'F';
console.log(chars);
chars.push('H');
console.log(chars);
chars.pop();
chars.pop();
console.log(chars);
chars.unshift('VV');
console.log(chars);

// atividade ==================================================================

// const num1 = new FormData(document.querySelector('form'));
// const inputValue1 = num1.get("num1");
// console.log(inputValue1);

// const num2 = new FormData(document.querySelector('form'));
// const inputValue2 = num2.get("num2");
// console.log(inputValue2);

// const valueConv1 = Number(inputValue1);
// const valueConv2 = Number(inputValue2);
// const soma = valueConv1 + valueConv2;
// // console.log(soma);
// // console.log(typeof soma);

// const subtracao = inputValue1 - inputValue2;
// // console.log(subtracao);
// // console.log(typeof subtracao);

// const multiplicacao = inputValue1 * inputValue2;
// // console.log(multiplicacao);
// // console.log(typeof multiplicacao);

// const divisao = inputValue1 / inputValue2;
// // console.log(divisao);
// // console.log(typeof divisao);
    
//  ===========================================================================

// Objects literal
const product = {
    productName: 'Camisa',
    price: 29.99,
    inStock: true,
    size: ['p', 'm', 'g'],
    'main color': 'red'
}

console.log(product.size[product.size.length-1]);
console.log(product.price);
console.log(product['main color']);

// destructuring - desestruturação
let { productName, price } = product;
console.log(productName);
price = 30.49;
console.log(price);
console.log(product.price);

const vector = [3, 7, 2, 45, 99];
let [ v1, v2, ...otherVector ] = vector;
console.log(otherVector);

// JSON - JacaScript Object Notation

// criando o objeto cachorro
const dog = {
    name: 'Scooby',
    age: 10
}

console.log(dog);
const dogJson = JSON.stringify(dog);
console.log(dogJson);
const dogObject = JSON.parse(dogJson);
console.log(dogObject);

// const jsonErrado = '{"primeiro":"dado1","segundo":222,"terceiro":"dado3}';
// const jsonErradoObject = JSON.parse(jsonErrado);

// Desafio 1: Armazene 5 dados numéricos em um vetor. Em seguida, copie para um objeto com as propriedades n1, n2, n3, n4 e n5.
// Utilize destructuring para copiar os valores para 5 variáveis. Construa um objeto JSON com os valores das variáveis.

const vectorNumerico = [1, 2, 3, 4, 5];
const vectorNumericoObject = {
    n1: vectorNumerico[0],
    n2: vectorNumerico[1],
    n3: vectorNumerico[2],
    n4: vectorNumerico[3],
    n5: vectorNumerico[4]
}

// const { n1, n2, n3, n4, n5 } = vectorNumericoJson;
// console.log(JSON.stringify({ n1, n2, n3, n4, n5 }));
 

// Desafio 2: Desenvolva uma calculadora que armazene em um objeto JSON o resultado das 4 operações básicas. 
// Em outras palavras: crie um objeto calculadora, inicialize cada uma das operações da calculadora (que serão 
// propriedades do objeto) com o resultado do processamento matemático vindo de duas variáveis e converta para um objeto JSON.

const num1 = 10;
const num2 = 20;
const calculadora = {
    soma: num1 + num2,
    subtracao: num1 - num2,
    multiplicacao: num1 * num2,
    divisao: num1 / num2
}
console.log(JSON.stringify(calculadora));