class Calculator{
    add(a,b){
        let c = a+b;
        return c;
    }

    sub(a,b){
        let c = a-b;
        return c;
    }

    mul(a,b){
        let c = a*b;
        return c;
    }
    div(a,b){
        let c = a/b;
        return c;
    }
}

let obj =new Calculator();
let addition = obj.add(2,3);
console.log(addition);
let subtraction = obj.sub(4,3);
console.log(subtraction);
let multiplication = obj.mul(3,2);
console.log(multiplication);
let division =obj.div( 10,2);
console.log(division);