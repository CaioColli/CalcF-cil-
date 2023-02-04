document.querySelector('#number2').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        somar();
    }
});

document.querySelector('#botaoApagar').addEventListener('click', function () { 
    document.querySelector('#resultado').innerHTML = ''
})

function somar() {
    let dado1 = document.querySelector('#number1')
    let dado2 = document.querySelector('#number2')
    let result = document.querySelector('#resultado')

    let n1 = Number(dado1.value)
    let n2 = Number(dado2.value)

    let s = n1 * n2

    result.innerHTML = s

    document.querySelector('#botaoApagar').addEventListener('click', function() {
        if (true) {
          dado1.value = ''
          dado2.value = ''
        }
      });  
}