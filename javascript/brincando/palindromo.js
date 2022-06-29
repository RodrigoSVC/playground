

function palindromo(string){
    if(!string) return;
    console.log(string == string.split('').reverse().join(''));

}

palindromo('romametemamor');



function palindromo2(string){
    if(!string) return;
    
    for(var i = 0; i < string.length / 2; i ++){
        if(string[i] !== string[string.length - 1 - i]){
            return console.log(false);
        }
    }
    return console.log(true);
}

palindromo2('romametemamor')