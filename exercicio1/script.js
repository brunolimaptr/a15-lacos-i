
let coxinha = prompt("Deseja comer mais coxinha? \nS para sim \nN para não").toUpperCase()
let conta = Number()


while(coxinha === "S"){
conta += 2.50
console.log(conta)
coxinha = prompt("Deseja comer mais coxinha? \nS para sim \nN para não").toUpperCase()

}

console.log(`Valor da conta é igual a ${conta}`)


