function changeColor(el){
    var newColor = '#' + Math.floor(Math.random()* 16777215).toString(16);
    if(newColor.length < 6){
        newColor = newColor + '0';
    }
    el.style.backgroundColor = newColor;
}

export {changeColor};