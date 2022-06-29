function final(num1, num2){
    const frase1 = comparador(num1, num2);
    const frase2 = isHigher(num1, num2);
    
    return `${frase1} ${frase2}`;
}

function comparador(num1, num2){
    let comparison = 'não';
    if(num1 === num2){
        comparsion = '';
    };

    return ` Os números ${num1} e ${num2} ${comparsion} são iguais.`;
}

function isHigher(num1, num2){
    const soma = num1+num2;
    let isHigher10 = 'menor';
    let isHigher20 = 'menor';

    if(soma > 10){
        isHigher10 = 'maior';
    };
    if(soma > 20){
        isHigher20 = 'maior';
    };
    if(soma === 20){
        isHigher20 = 'igual';
    }
    if(soma === 10){
        isHigher10 = 'igual';
    }

    return `Sua soma é ${soma}, que é ${isHigher10} que 10 e ${isHigher20} que 20.`;
}

console.log(final(10,10));