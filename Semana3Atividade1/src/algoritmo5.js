//cria a variável "users" que recebe uma lista de objetos
const users=[
    {firstName:"john", lastName:"colben", age:26},
    {firstName:"jimmy", lastName:"fred", age:75},
    {firstName:"sam", lastName:"boston", age:50},
    {firstName:"ronald", lastName:"bristh", age:26},   
  ];
  //cria a variavel "output" que recebe a lista retornada do map sobre a lista users, o map tem a variável de iteração "x",o map pegará cada objeto de users e retornará o nome e sobrenome com um espaço os separando 
  const output = users.map((x)=> x.firstName + " " + x.lastName);
  //mostra no console do browser a lista "output"
  console.log(output);
  