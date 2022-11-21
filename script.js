
function numeroTela(num) {
    document.getElementById('ivisor').value += num;
}


function operaMais() {
    const opera = document.getElementById('op+').value;
    document.getElementById('ivisor').value += opera;
    const visor = document.getElementById('ivisor').value;
    console.log(opera)
    if (visor.includes('+')) {
        const numeros = visor.split('+');
        if (numeros.length >= 3) {
            const num1 = parseInt(numeros[0]);
            const num2 = parseInt(numeros[1]);
            const soma = num1 + num2;
            console.log(soma);
            document.getElementById('ivisor').value = soma;
        }
    }
}

function operaMenos() {
    const opera = document.getElementById('op-').value;
    document.getElementById('ivisor').value += opera;
    const visor = document.getElementById('ivisor').value;
    if (visor.includes('-')) {
        const numeros = visor.split('-');
        if (numeros.length >= 3) {
            const num1 = parseInt(numeros[0]);
            const num2 = parseInt(numeros[1]);
            const sub = num1 - num2;
            console.log(sub);
            document.getElementById('ivisor').value = sub;
        }
    }
}
