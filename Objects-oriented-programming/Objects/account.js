/*
Estas diseñando un sistema basico para gestionar cuentas bancarias de clientes
Cada cuenta bancaria tendra un identificador unico, un nombre de titular y un saldo 

Tu tarea es crear un funcion createAccount que genere un objeto de cuenta bancaria

El objeto debe ser creado por medio de una funcion declaration, con todas las propiedades y
metodos deben de estar definidos (dentro de la funcion usando this).
    id: identificador unico de la cuenta
    holderName: nombre del titular de la cuenta
    balance: saldo de la cuenta
    Metodos de la cuenta bancaria (dentro de la funcion usando this):

    deposit (amount): incrementa el saldo de la cuenta
    withdraw(amount): disminuye el saldo de la cuenta si hay suficientes fondos
    transfer(toAccount, amount): transfiere fondos de la cuenta actual a otra cuenta 
    si hay suficientes fondos disponibles.


*/

function Account(id, name, balance = 0) {
    this.id = id
    this.name = name
    this.balance = balance

    this.deposit = (amount) => {
        this.balance += amount
    }

    this.withdraw = (amount) => {
        if (this.balance >= amount) {
        this.balance -= amount
    return amount
    }

    return null
    }

    this.transfer = (toAccount, amount) => {
        const cash = this.withdraw(amount)

        if (cash) {
            toAccount.deposit(cash)
            return toAccount
        } 
        return null
    }

return this
}

const acc1 = new Account(1,'Steven',10000)
acc1.deposit(1000)
acc1.withdraw(5000)


const acc2 = new Account(2,'Jose',0)

console.log(acc1.transfer(acc2,5000))
acc1.transfer(acc2,5000)

console.log(acc1)

