var saveEl = document.getElementById("save-el")
var countEl = document.getElementById("count-el");
var count = 0;

function increment()
{
    count += 1;
    countEl.textContent = count;
}

function save(){

    var save_btn = count + " - "
    saveEl.textContent += save_btn
    countEl.textContent = count = 0

}