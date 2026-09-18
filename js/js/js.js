var div = document.getElementById("show");
var resetBtn = document.getElementById("reset");
var alarm = document.getElementById("alarm");

div.style.display = "none";
resetBtn.style.display = "none";
let hourInput = document.getElementById("hour");
    let minutInput = document.getElementById("minut");
    let secendInput = document.getElementById("secend");
let timer;

function start() {

    

    // بررسی خالی بودن
    if (
        hourInput.value == "" &&
        minutInput.value == "" &&
        secendInput.value == ""
    ) {
        alert("زمان را وارد کن");
        return;
    }

    // بررسی محدوده اعداد
    if (
        hourInput.value > 100 ||
        minutInput.value > 59 ||
        secendInput.value > 59
    ) {
        alert("مقدار صحیح را وارد کنید");
        hourInput.value= "";
    minutInput.value="";
    secendInput.value= "";
        return;
    }

    let hore = Number(hourInput.value);
    let minut = Number(minutInput.value);
    let secend = Number(secendInput.value);

    div.style.display = "block";
    resetBtn.style.display = "block";

    div.innerHTML =
        String(hore).padStart(2, "0") + ":" +
        String(minut).padStart(2, "0") + ":" +
        String(secend).padStart(2, "0");

    clearInterval(timer);

    timer = setInterval(function () {

        if (secend > 0) {

            secend--;

        } else if (minut > 0) {

            minut--;
            secend = 59;

        } else if (hore > 0) {

            hore--;
            minut = 59;
            secend = 59;

        } else {

            // تایمر به صفر رسید
            clearInterval(timer);
            return;
        }

        div.innerHTML =
            String(hore).padStart(2, "0") + ":" +
            String(minut).padStart(2, "0") + ":" +
            String(secend).padStart(2, "0");

    }, 1000);
}


function resetTimer() {

    clearInterval(timer);

    div.innerHTML = "00:00:00";
    hourInput.value= "";
    minutInput.value="";
    secendInput.value= "";
    div.style.display = "none";
    resetBtn.style.display = "none";
}
function menha(e){
    if (e.keyCode == 189 || e.keyCode==109){
        e.preventDefault();
    }  
}
