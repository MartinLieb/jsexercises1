

let abmin = function(){
    let a = document.getElementById("a");
    let b = document.getElementById("b");
    let c = document.getElementById("c");

    c.value = Math.min(a.value, b.value);

}

let loop = function(){
    let number = 0;
    while (number<=12){
        document.getElementById("txtarea").value += number + ("\n");
        number = number + 1;

    }


}
