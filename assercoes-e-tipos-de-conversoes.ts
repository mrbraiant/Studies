let meu_nome: any = "Braiant Malta";
console.log(meu_nome.length);
//propriedade indefinida
console.log(meu_nome.xpto);
//convertendo any para string
//let count = (<string>meu_nome).length;
//Unsando as
let count =(meu_nome as string).length;
console.log(count);

let obj = {
    name: "Braioso"
};
//incluindo .texto sem ter declarado antes
(<any>obj).texto = 'School of Net';

//obj.name = "nois";

console.log(obj);

/*metodos utilizados comumente, mas não funciona mais
numero para string
let num = 2;
console.log(typeof num);
let numString = num + "";
console.log(typeof num);
//string pra numero
let num1 = "-258";
let stringNum = +num1;
console.log(typeof num1);
console.log(num1); */
