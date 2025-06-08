const dec = document.getElementById("dec");
const reset = document.getElementById("reset");
const inc = document.getElementById("in");
const countbtn = document.getElementById("count2");

let count = 0;

inc.onclick = function() {
    count++;
    countbtn.textContent = count;
}
dec.onclick=function(){
    count--;
    if(count<=0)
    {
        count=0;

    }
    countbtn.textContent = count;

}

reset.onclick = function(){
    count=0;
    countbtn.textContent = count;
    window.alert("count is reset")
}




