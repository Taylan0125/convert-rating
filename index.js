

window.onload = function () {
    let btn = document.getElementById("btn1");
    btn.onclick = function () {
        let x = document.getElementById("value1").value;
        let y = document.getElementById("value2").value;
        let z = document.getElementById("value4").value;
        var a = (x * z) / y;
        document.querySelector("#value3").value = a
    }
}