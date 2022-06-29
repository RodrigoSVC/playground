function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}


const pessoa = {
        nome: 'Tamiris',
        idade: 20,
    }


console.log(calculaIdade.call(pessoa, 20));