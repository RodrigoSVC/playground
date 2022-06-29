    function changeEven(array){
        if(!array) return -1;
        if(!array.length) return -1;
        for(let i = 0; i < array.length; i ++){
            if(array[i] % 2 == 0 && array[i]!= 0){
                console.log(`trocando ${array[i]} por 0...`);
                array[i] = 0;
            }
            else if (!array[i] != 0){
                console.log('Você já vale 0');
            }        
        }
        console.log(array);
    }

    console.log(changeEven(null))