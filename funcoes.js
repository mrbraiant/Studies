var soma = function (x, y) {
    return x + y;
};
var multiplica = function (x, y) {
    return x * y;
};
var divide = function (x, y) { return x / y; };
var funcao = function (name) {
    return "Braioso " + name;
};
var funcaosimples = function (name) { return "Braioso Malta" + name; };
var funcaoDefaultParameters = function (first_name, last_name) {
    if (last_name === void 0) { last_name = "Malta"; }
};
funcaoDefaultParameters('Braioso');
var funcaoOptionalParameters = function (first_name, last_name) {
    console.log(first_name, last_name);
};
funcaoOptionalParameters("brais");
var num1 = soma(5, 5);
console.log(soma(5, 5));
console.log(num1);
console.log(multiplica(5, 5));
console.log(divide(10, 2));
