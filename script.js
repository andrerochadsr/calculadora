function opera(num) {
    /*const plus = [];
    const multi = [];
    const minus = [];
    const div = [];
    const operador = document.getElementById('op').value;
    if (operador == '+') {
        
        plus.push(document.getElementById('i/o').value);
        console.log(plus)
        
    }
    if (operador == '-') {
        minus.push(document.getElementById('i/o').value)
        console.log(minus)
    } */
    const numero = (num) => {
        return parseInt(num);
    };
    console.log(numero(num))
    
    const nume = num;
    //console.log(nume)
    //alert(nume);
    document.getElementById('i/o').value += nume;
}
function result() {
    const resultado = document.getElementById('i/o').value;
    if (resultado.includes('+')) {
        const re = resultado.split('+')
        console.log(re)
    }
    console.log(typeof(resultado));
}
