//Basic Types
//Boolean
let success: boolean = true;
//Number
let num: number = 32.5;
//String
let nome: string = "Braioso ";
let nome1: string = "Malta";
//Arrays
let arrayStrings: string[] = ["Array","cool legal","b"];
let arrayStrings1: Array<string> = ["Array1","w","e"];
let arrayStrings2: Array<any> = ["Array2Any", 2, "x"];
//Enum
enum estado_civil {Solteiro, Casado, Divorciado};
let meu_estado_civil: estado_civil = estado_civil.Solteiro;
if(meu_estado_civil == estado_civil.Solteiro){
    console.log("\nEstado civil: Solteiro\n");
}
var _mostra = `School of Net - Writed by ${nome + nome1}`;

console.log(_mostra);
console.log(arrayStrings);
console.log(arrayStrings1);
console.log(arrayStrings2);