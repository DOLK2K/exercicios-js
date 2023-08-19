function calcular (salario,bonus,desconto){
    let v = (salario * bonus)/ 100;
    let a = salario + v;
    let r = (salario *desconto) / 100;
    let l = a-r;
    return l;

}
let x = calcular (1000,10,300)
console.log (x);
