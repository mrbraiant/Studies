//Basic Types
//Boolean
var success = true;
//Number
var num = 32.5;
//String
var nome = "Braioso ";
var nome1 = "Malta";
//Arrays
var arrayStrings = ["Array: ", "cool legal", "b"];
var arrayStrings1 = ["Array1: ", "w", "e"];
var arrayStrings2 = ["Array2Any", 2, "x"];
//Enum
var estado_civil;
(function (estado_civil) {
    estado_civil[estado_civil["Solteiro"] = 0] = "Solteiro";
    estado_civil[estado_civil["Casado"] = 1] = "Casado";
    estado_civil[estado_civil["Divorciado"] = 2] = "Divorciado";
})(estado_civil || (estado_civil = {}));
;
var meu_estado_civil = estado_civil.Solteiro;
if (meu_estado_civil == estado_civil.Solteiro) {
    console.log("\nEstado civil: Solteiro\n");
}
var _mostra = "School of Net - Writed by " + (nome + nome1);
console.log(_mostra);
console.log(arrayStrings);
console.log(arrayStrings1);
console.log(arrayStrings2);
