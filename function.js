function multiplicationTable(){
    number1 = (window.document.getElementById('number1'))
    number2 = document.getElementById('number2')

    number1 = Number(number1.value)
    number2 = Number(number2.value)

    table = document.getElementById('Js')

    if(number1 == ''){
        alert('You need to choose a number to calculate his multiplication table!')
    } else if (number2 == ''){
        alert('You need to choose how far the table goes!')
    } else {
        var x = 1;
        table.innerHTML = `A tabuada do ${number1} é: <br> <br>`
        while(x <= number2){
            var r = number1 * x
            table.innerHTML += `${number1} x ${x} = ${r} <br>`
            x++
        }
        table.innerHTML += `<br>`
    }

}