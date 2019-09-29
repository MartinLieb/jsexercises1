

let abmin = function(){
    let a = document.getElementById("a");
    let b = document.getElementById("b");
    let c = document.getElementById("c");

    c.value = Math.min(a.value, b.value);

}

let loop = function(){
    let number = 0;
    let text = document.getElementById("txtarea")
    while (number<=12){
        text.innerText = text + number;
        number = number + 1;

    }


}
