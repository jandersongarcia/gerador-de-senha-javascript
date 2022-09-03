
const contador = document.getElementById("counter")
const span = document.querySelector("span")
const upper = document.getElementById("upper")
const numbers = document.getElementById("numbers")
const specials = document.getElementById("specials")
const lower = document.getElementById("lower")
const visor = document.getElementById("visor")
const button = document.querySelector("button")
const msg = document.getElementById("alert")

upper.addEventListener('change',()=>{
    geraSenha()
})

lower.addEventListener('change',()=>{
    geraSenha()
})

numbers.addEventListener('change',()=>{
    geraSenha()
})

specials.addEventListener('change',()=>{
    geraSenha()
})

contador.addEventListener('input', () => {
    span.textContent  = contador.value
    geraSenha()
})

function geraSenha(){
    let char = ""
    let num = contador.value
    let pas = ""

    if(upper.checked){ char += "ABCDEFGHIJKLMNOPQRSTWXYV" }
    if(lower.checked){ char += "abcdefghijklmnopqrstuvwxyz" }
    if(numbers.checked){ char += "0123456789"}
    if(specials.checked){ char += "!@#$&(){}[]?;:"}

    for(var i = 0; i < num; i++){
        var sorteio = Math.floor(Math.random() * char.length)
        pas += char.substring(sorteio,sorteio + 1)
    }

    visor.value = pas
    console.log(pas)

}

function copyText(){
    visor.select()
    visor.setSelectionRange(0, 99999)
    document.execCommand("copy");

    msg.classList.remove('d-none')
    msg.innerHTML = "A senha <strong>" + visor.value + "</strong> foi copiada com sucesso."

    setTimeout(()=>{
        msg.classList.add("d-none")
    },5000)

}

geraSenha()