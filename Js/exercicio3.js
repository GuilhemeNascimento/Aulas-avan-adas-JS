// 1. Faça um programa que peça uma nota, entre zero e dez. 
// Mostre uma mensagem caso o valor seja inválido e continue pedindo até que o usuário informe um valor válido.
let nota;
do {
    nota = parseFloat(prompt("Digite uma nota entre 0 e 10:"));
    if (nota < 0 || nota > 10) {
        alert("Nota inválida! Digite novamente.");
    }
} while (nota < 0 || nota > 10);


// 2. Crie um loop que imprima todos os números de 1 a 100.
for (let i = 1; i <= 100; i++) {
    console.log(i);
}


// 3. Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual ao nome do usuário,
// mostrando uma mensagem de erro e voltando a pedir as informações.
let nomeUsuario, senha;
do {
    nomeUsuario = prompt("Digite seu nome de usuário:");
    senha = prompt("Digite sua senha:");
    if (senha === nomeUsuario) {
        alert("A senha não pode ser igual ao nome de usuário. Tente novamente.");
    }
} while (senha === nomeUsuario);


// 4. Faça um programa que leia e valide as seguintes informações:
// a. Nome: maior que 3 caracteres;
// b. Idade: entre 0 e 150;
// c. Salário: maior que zero;
// d. Sexo: 'f' ou 'm';
// e. Estado Civil: 's', 'c', 'v', 'd';
let nome, idade, salario, sexo, estadoCivil;

do {
    nome = prompt("Digite seu nome:");
} while (nome.length <= 3);

do {
    idade = parseInt(prompt("Digite sua idade:"));
} while (idade < 0 || idade > 150);

do {
    salario = parseFloat(prompt("Digite seu salário:"));
} while (salario <= 0);

do {
    sexo = prompt("Digite seu sexo (f ou m):").toLowerCase();
} while (sexo !== 'f' && sexo !== 'm');

do {
    estadoCivil = prompt("Digite seu estado civil (s, c, v, d):").toLowerCase();
} while (!['s', 'c', 'v', 'd'].includes(estadoCivil));


// 5. Supondo que a população de um país A seja da ordem de 80000 habitantes com uma taxa anual de crescimento de 3% 
// e que a população de B seja 200000 habitantes com uma taxa de crescimento de 1.5%. 
// Faça um programa que calcule e escreva o número de anos necessários para que a população do país A ultrapasse ou iguale a população do país B.
let populacaoA = 80000;
let populacaoB = 200000;
let anos = 0;

while (populacaoA < populacaoB) {
    populacaoA += populacaoA * 0.03;
    populacaoB += populacaoB * 0.015;
    anos++;
}

console.log(`Serão necessários ${anos} anos para que a população do país A ultrapasse a do país B.`);


// 6. Altere o programa anterior permitindo ao usuário informar as populações e as taxas de crescimento iniciais. 
// Valide a entrada e permita repetir a operação.
let continuar = true;

while (continuar) {
    let populacaoA = parseInt(prompt("Informe a população do país A:"));
    let populacaoB = parseInt(prompt("Informe a população do país B:"));
    let taxaA = parseFloat(prompt("Informe a taxa de crescimento anual do país A (%):")) / 100;
    let taxaB = parseFloat(prompt("Informe a taxa de crescimento anual do país B (%):")) / 100;

    let anos = 0;

    while (populacaoA < populacaoB) {
        populacaoA += populacaoA * taxaA;
        populacaoB += populacaoB * taxaB;
        anos++;
    }

    console.log(`Serão necessários ${anos} anos para que a população do país A ultrapasse a do país B.`);

    continuar = confirm("Deseja calcular novamente?");
}


// 7. Faça um programa que imprima na tela os números de 1 a 20, um abaixo do outro. 
// Depois modifique o programa para que ele mostre os números um ao lado do outro.
for (let i = 1; i <= 20; i++) {
    console.log(i);
}

let numeros = '';
for (let i = 1; i <= 20; i++) {
    numeros += i + ' ';
}
console.log(numeros);


// 8. Faça um programa que leia 5 números e informe o maior número.
let maiorNumero = -Infinity;
for (let i = 0; i < 5; i++) {
    let numero = parseInt(prompt("Digite um número:"));
    if (numero > maiorNumero) {
        maiorNumero = numero;
    }
}
console.log(`O maior número é: ${maiorNumero}`);


// 9. Faça um programa que leia 5 números e informe a soma e a média dos números.
let soma = 0;
for (let i = 0; i < 5; i++) {
    let numero = parseInt(prompt("Digite um número:"));
    soma += numero;
}
let media = soma / 5;
console.log(`A soma é: ${soma}`);
console.log(`A média é: ${media}`);


// 10. Faça um programa que imprima na tela apenas os números ímpares entre 1 e 50.
for (let i = 1; i <= 50; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}


// 11. Faça um programa que receba dois números inteiros e gere os números inteiros que estão no intervalo compreendido por eles.
let num1 = parseInt(prompt("Digite o primeiro número:"));
let num2 = parseInt(prompt("Digite o segundo número:"));
for (let i = num1 + 1; i < num2; i++) {
    console.log(i);
}


// 12. Altere o programa anterior para mostrar no final a soma dos números.
let somaIntervalo = 0;
for (let i = num1 + 1; i < num2; i++) {
    somaIntervalo += i;
}
console.log(`A soma dos números no intervalo é: ${somaIntervalo}`);


// 13. Desenvolva um gerador de tabuada, capaz de gerar a tabuada de qualquer número inteiro entre 1 a 10.
// O usuário deve informar de qual número ele deseja ver a tabuada.
let numero = parseInt(prompt("Digite o número para ver a tabuada:"));
console.log(`Tabuada de ${numero}:`);
for (let i = 1; i <= 10; i++) {
    console.log(`${numero} X ${i} = ${numero * i}`);
}


// 14. Faça um programa que peça dois números, base e expoente, calcule e mostre o primeiro número elevado ao segundo número.
// Não utilize a função de potência da linguagem.
let base = parseInt(prompt("Digite a base:"));
let expoente = parseInt(prompt("Digite o expoente:"));
let resultado = 1;
for (let i = 1; i <= expoente; i++) {
    resultado *= base;
}
console.log(`${base} elevado a ${expoente} é: ${resultado}`);


// 15. Faça um programa que peça 10 números inteiros, calcule e mostre a quantidade de números pares e a quantidade de números ímpares.
let pares = 0;
let impares = 0;
for (let i = 0; i < 10; i++) {
    let numero = parseInt(prompt("Digite um número:"));
    if (numero % 2 === 0) {
        pares++;
    } else {
        impares++;
    }
}
console.log(`Quantidade de pares: ${pares}`);
console.log(`Quantidade de ímpares: ${impares}`);


// 16. A série de Fibonacci é formada pela sequência 1,1,2,3,5,8,13,21,34,55,... 
// Faça um programa capaz de gerar a série até o n−ésimo termo.
let n = parseInt(prompt("Digite o número de termos da sequência Fibonacci:"));
let a = 0, b = 1;
console.log("Sequência Fibonacci:");
for (let i = 0; i < n; i++) {
    console.log(a);
    let temp = a;
    a = b;
    b = temp + b;
}


// 17. A série de Fibonacci é formada pela sequência 0,1,1,2,3,5,8,13,21,34,55,... 
// Faça um programa que gere a série até que o valor seja maior que 500.
let a = 0, b = 1;
console.log("Sequência Fibonacci até 500:");
while (a <= 500) {
    console.log(a);
    let temp = a;
    a = b;
    b = temp + b;
}


// 18. Faça um programa que calcule o fatorial de um número inteiro fornecido pelo usuário. Ex.: 5!=5.4.3.2.1=120
let numeroFatorial = parseInt(prompt("Digite um número para calcular seu fatorial:"));
let fatorial = 1;
for (let i = numeroFatorial; i > 0; i--) {
    fatorial *= i;
}
console.log(`O fatorial de ${numeroFatorial} é: ${fatorial}`);


// 19. Faça um programa que leia um número e informe se ele é primo ou não. 
// Um número é primo quando ele é maior que 1 e só pode ser dividido por 1 e por ele mesmo.
let numeroPrimo = parseInt(prompt("Digite um número para verificar se é primo:"));
let isPrimo = true;
for (let i = 2; i <= Math.sqrt(numeroPrimo); i++) {
    if (numeroPrimo % i === 0) {
        isPrimo = false;
        break;
    }
}
if (isPrimo && numeroPrimo > 1) {
    console.log(`${numeroPrimo} é primo.`);
} else {
    console.log(`${numeroPrimo} não é primo.`);
}


// 20. Faça um programa que leia um número inteiro positivo e que mostre o número invertido. Ex.: 1234 -> 4321
let numeroInvertido = prompt("Digite um número para invertê-lo:");
let numeroInvertidoStr = numeroInvertido.split("").reverse().join("");
console.log(`O número invertido é: ${numeroInvertidoStr}`);


// 21. Faça um programa que leia a idade de várias pessoas e mostre: 
// a) A média de idade do grupo
// b) A maior idade
// c) A menor idade
let idades = [];
let maisVelho = -Infinity;
let maisNovo = Infinity;
let somaIdades = 0;
let continuar = true;

while (continuar) {
    let idade = parseInt(prompt("Digite a idade:"));
    idades.push(idade);
    somaIdades += idade;
    if (idade > maisVelho) maisVelho = idade;
    if (idade < maisNovo) maisNovo = idade;
    continuar = confirm("Deseja inserir outra idade?");
}

let mediaIdade = somaIdades / idades.length;
console.log(`Média de idade: ${mediaIdade}`);
console.log(`Maior idade: ${maisVelho}`);
console.log(`Menor idade: ${maisNovo}`);


// 22. Faça um programa que leia uma quantidade de alunos e suas respectivas notas. 
// Ao final, calcule e mostre a maior e menor nota e a média geral.
let quantidadeAlunos = parseInt(prompt("Quantos alunos estão participando?"));
let maiorNota = -Infinity;
let menorNota = Infinity;
let somaNotas = 0;

for (let i = 0; i < quantidadeAlunos; i++) {
    let nota = parseFloat(prompt(`Digite a nota do aluno ${i + 1}:`));
    somaNotas += nota;
    if (nota > maiorNota) maiorNota = nota;
    if (nota < menorNota) menorNota = nota;
}

let mediaNotas = somaNotas / quantidadeAlunos;
console.log(`Maior nota: ${maiorNota}`);
console.log(`Menor nota: ${menorNota}`);
console.log(`Média geral: ${mediaNotas}`);


// 23. Faça um programa que leia uma lista de números e mostre:
// a) Quantos números são múltiplos de 3 e de 5
// b) Quantos números são primos
let listaNumeros = [12, 15, 23, 30, 5, 7, 2, 20, 17, 100];
let multiplosDeTresEcinco = 0;
let primos = 0;

for (let num of listaNumeros) {
    if (num % 3 === 0 && num % 5 === 0) multiplosDeTresEcinco++;
    if (num > 1 && ![...Array(num).keys()].slice(2).some(x => num % x === 0)) primos++;
}

console.log(`Multiplo de 3 e 5: ${multiplosDeTresEcinco}`);
console.log(`Primos: ${primos}`);


// 24. Crie um programa que gere um número aleatório entre 1 e 1000. 
// O programa deve continuar gerando números até que um número múltiplo de 50 seja gerado.
let numeroAleatorio;
do {
    numeroAleatorio = Math.floor(Math.random() * 1000) + 1;
    console.log(numeroAleatorio);
} while (numeroAleatorio % 50 !== 0);
console.log(`O número múltiplo de 50 gerado foi: ${numeroAleatorio}`);


// 25. Faça um programa que leia a idade e o peso de uma pessoa e informe se ela está apta para doação de sangue. 
// As condições são: Idade entre 18 e 65 anos e peso superior a 50 kg.
let idadePessoa = parseInt(prompt("Digite sua idade:"));
let pesoPessoa = parseFloat(prompt("Digite seu peso:"));
if (idadePessoa >= 18 && idadePessoa <= 65 && pesoPessoa > 50) {
    console.log("Você está apto para doar sangue.");
} else {
    console.log("Você não está apto para doar sangue.");
}


// 26. Crie um programa que leia um número e informe se ele é divisível por 3 e por 5 ao mesmo tempo.
let numeroDivisivel = parseInt(prompt("Digite um número para verificar se é divisível por 3 e 5:"));
if (numeroDivisível % 3 === 0 && numeroDivisível % 5 === 0) {
    console.log(`${numeroDivisível} é divisível por 3 e por 5.`);
} else {
    console.log(`${numeroDivisível} não é divisível por 3 e por 5.`);
}


// 27. Crie um programa que leia os três lados de um triângulo e informe qual é o tipo de triângulo formado.
// Os tipos são: Equilátero, Isósceles ou Escaleno.
let ladoA = parseInt(prompt("Digite o valor do primeiro lado do triângulo:"));
let ladoB = parseInt(prompt("Digite o valor do segundo lado do triângulo:"));
let ladoC = parseInt(prompt("Digite o valor do terceiro lado do triângulo:"));

if (ladoA === ladoB && ladoB === ladoC) {
    console.log("O triângulo é Equilátero.");
} else if (ladoA === ladoB || ladoB === ladoC || ladoA === ladoC) {
    console.log("O triângulo é Isósceles.");
} else {
    console.log("O triângulo é Escaleno.");
}

// 28. Faça um programa que calcule a média ponderada de quatro notas, sendo que a primeira nota tem peso 2, 
// a segunda tem peso 3, a terceira tem peso 4 e a quarta tem peso 5.
let nota1 = parseFloat(prompt("Digite a primeira nota:"));
let nota2 = parseFloat(prompt("Digite a segunda nota:"));
let nota3 = parseFloat(prompt("Digite a terceira nota:"));
let nota4 = parseFloat(prompt("Digite a quarta nota:"));

let mediaPonderada = (nota1 * 2 + nota2 * 3 + nota3 * 4 + nota4 * 5) / (2 + 3 + 4 + 5);
console.log(`A média ponderada das notas é: ${mediaPonderada}`);


// 29. Crie um programa que leia um número e informe se ele é um número perfeito. 
// Um número perfeito é aquele que é igual à soma de seus divisores, excluindo ele mesmo.
let numeroPerfeito = parseInt(prompt("Digite um número para verificar se é perfeito:"));
let somaDivisores = 0;
for (let i = 1; i < numeroPerfeito; i++) {
    if (numeroPerfeito % i === 0) {
        somaDivisores += i;
    }
}
if (somaDivisores === numeroPerfeito) {
    console.log(`${numeroPerfeito} é um número perfeito.`);
} else {
    console.log(`${numeroPerfeito} não é um número perfeito.`);
}


// 30. Crie um programa que leia uma palavra e imprima a palavra invertida.
let palavra = prompt("Digite uma palavra:");
let palavraInvertida = palavra.split("").reverse().join("");
console.log(`A palavra invertida é: ${palavraInvertida}`);


// 31. Faça um programa que leia um número inteiro e mostre os divisores desse número.
let numeroDivisores = parseInt(prompt("Digite um número para ver seus divisores:"));
console.log(`Divisores de ${numeroDivisores}:`);
for (let i = 1; i <= numeroDivisores; i++) {
    if (numeroDivisores % i === 0) {
        console.log(i);
    }
}


// 32. Faça um programa que leia um número inteiro e mostre a quantidade de divisores desse número.
let numeroDivisoresQtd = parseInt(prompt("Digite um número para contar seus divisores:"));
let contadorDivisores = 0;
for (let i = 1; i <= numeroDivisoresQtd; i++) {
    if (numeroDivisoresQtd % i === 0) {
        contadorDivisores++;
    }
}
console.log(`O número ${numeroDivisoresQtd} tem ${contadorDivisores} divisores.`);


// 33. Crie um programa que leia um número e calcule sua tabuada até 20.
let numTabuada = parseInt(prompt("Digite um número para ver sua tabuada:"));
console.log(`Tabuada de ${numTabuada}:`);
for (let i = 1; i <= 20; i++) {
    console.log(`${numTabuada} x ${i} = ${numTabuada * i}`);
}


// 34. Crie um programa que leia um número e calcule o dobro, o triplo e a raiz quadrada desse número.
let numeroCalculo = parseFloat(prompt("Digite um número para calcular o dobro, o triplo e a raiz quadrada:"));
console.log(`Dobro: ${numeroCalculo * 2}`);
console.log(`Triplo: ${numeroCalculo * 3}`);
console.log(`Raiz quadrada: ${Math.sqrt(numeroCalculo)}`);


// 35. Faça um programa que leia o salário de um funcionário e calcule o novo salário com aumento de 15%.
let salario = parseFloat(prompt("Digite o salário do funcionário:"));
let aumento = salario * 0.15;
let novoSalario = salario + aumento;
console.log(`O novo salário com aumento de 15% é: ${novoSalario}`);


// 36. Crie um programa que leia um número e calcule o seu fatorial de forma recursiva.
function fatorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * fatorial(n - 1);
    }
}

let numeroFatorialRecursivo = parseInt(prompt("Digite um número para calcular seu fatorial de forma recursiva:"));
console.log(`O fatorial de ${numeroFatorialRecursivo} é: ${fatorial(numeroFatorialRecursivo)}`);


// 37. Crie um programa que leia uma lista de números e imprima a soma de todos os elementos.
let listaNumeros = [10, 20, 30, 40, 50];
let somaLista = listaNumeros.reduce((acumulador, numero) => acumulador + numero, 0);
console.log(`A soma dos elementos da lista é: ${somaLista}`);


// 38. Crie um programa que leia uma lista de números e calcule a média dos elementos.
let listaNumerosMedia = [10, 20, 30, 40, 50];
let somaListaMedia = listaNumerosMedia.reduce((acumulador, numero) => acumulador + numero, 0);
let mediaLista = somaListaMedia / listaNumerosMedia.length;
console.log(`A média dos elementos da lista é: ${mediaLista}`);


// 39. Faça um programa que leia uma lista de números e informe qual é o maior número.
let listaNumerosMaior = [10, 20, 30, 40, 50];
let maiorNumeroLista = Math.max(...listaNumerosMaior);
console.log(`O maior número da lista é: ${maiorNumeroLista}`);


// 40. Faça um programa que leia uma lista de números e informe qual é o menor número.
let listaNumerosMenor = [10, 20, 30, 40, 50];
let menorNumeroLista = Math.min(...listaNumerosMenor);
console.log(`O menor número da lista é: ${menorNumeroLista}`);


// 41. Crie um programa que leia um número e calcule a soma dos divisores desse número.
let numeroSomaDivisores = parseInt(prompt("Digite um número para calcular a soma dos seus divisores:"));
let somaDivisoresNumero = 0;
for (let i = 1; i <= numeroSomaDivisores; i++) {
    if (numeroSomaDivisores % i === 0) {
        somaDivisoresNumero += i;
    }
}
console.log(`A soma dos divisores de ${numeroSomaDivisores} é: ${somaDivisoresNumero}`);


// 42. Crie um programa que leia um número e determine se ele é perfeito, abundante ou deficiente. 
// Um número perfeito é aquele que é igual à soma de seus divisores (excluindo ele mesmo), 
// um número abundante é aquele cuja soma de seus divisores é maior que ele, 
// e um número deficiente é aquele cuja soma de seus divisores é menor que ele.
let numeroTipo = parseInt(prompt("Digite um número para verificar se é perfeito, abundante ou deficiente:"));
let somaDivisoresTipo = 0;
for (let i = 1; i < numeroTipo; i++) {
    if (numeroTipo % i === 0) {
        somaDivisoresTipo += i;
    }
}
if (somaDivisoresTipo === numeroTipo) {
    console.log(`${numeroTipo} é um número perfeito.`);
} else if (somaDivisoresTipo > numeroTipo) {
    console.log(`${numeroTipo} é um número abundante.`);
} else {
    console.log(`${numeroTipo} é um número deficiente.`);
}


// 43. Crie um programa que leia a quantidade de elementos de uma lista e, em seguida, leia os elementos dessa lista. 
// O programa deve exibir a lista de forma invertida.
let quantidadeElementos = parseInt(prompt("Digite a quantidade de elementos da lista:"));
let listaElementos = [];
for (let i = 0; i < quantidadeElementos; i++) {
    let elemento = prompt(`Digite o ${i + 1}° elemento da lista:`);
    listaElementos.push(elemento);
}
console.log(`Lista invertida: ${listaElementos.reverse().join(", ")}`);


