function sumar() {
    let number1 = document.getElementById("number1").value
    let number2 = document.getElementById("number2").value
    let suma = parseInt(number1) + parseInt(number2);
    document.getElementById("result").innerHTML= suma;
}