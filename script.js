alert('Esse é um super contador, ele funciona da seguinte maneira: primeiro é colocado o número inicial, logo após é colocado o número final, e o terceiro passo é inserir a sequencia desejada. Ex: Inicial: 1; Final: 10; Sequência: 2; Resultará em: 2, 4, 6, 8, 10! Tambem funciona em ordem decrescente, e com números negativos!')

function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossivel contar, preencha todos os dados!'
    } else {
        res.innerHTML = 'Contando: <br><br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            alert('Passo invalido! Considerando passo: 1')
            p = 1
        }
        if (i< f) {
            for(let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{2714} `
            }
        } else {
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{2714} `
            }
        }
        res.innerHTML += `\u{2705}`
    }
}