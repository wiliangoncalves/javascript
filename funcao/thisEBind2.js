function pessoa(){
    this.idade = 0

    const self = this
    setInterval(function(){
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000) // A cada X MILISEGUNDOS a função vai ser feita as execuções.
}

new pessoa