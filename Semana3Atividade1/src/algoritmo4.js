//criação de um array chamado de "numbers"
const arr = [1,2,3,4,5]
//a variavel output recebe a lista retornada de filter, filter faz a verificação se cada variável de iteração é maior que 4 e retorna a lista de números maiores que 4
const output = arr.filter((x)=> x > 4);
//mostra no console do browser a lista da variável "output"
console.log(output);
