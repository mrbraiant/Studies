const soma = function(x:number,y:number):number{
    return x + y;
}
const multiplica = (x: number, y: number): number =>{
    return x * y;
}
const divide = (x: number, y: number): number => x / y;

let funcao = (name: string) =>{
    return `Braioso ${name}`
};

let funcaosimples = name => `Braioso Malta${name}`;

let funcaoDefaultParameters = (first_name, last_name = "Malta")=>{
    
}
funcaoDefaultParameters('Braioso');


let funcaoOptionalParameters = (first_name: string, last_name?: string)=>{
    console.log(first_name, last_name);
}
funcaoOptionalParameters("brais");

let num1: number = soma(5,5);

console.log(soma(5,5));
console.log(num1);
console.log(multiplica(5,5));
console.log(divide(10,2));