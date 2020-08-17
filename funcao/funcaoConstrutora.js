function Carro(VelocidadeMaxima = 200, delta = 5){
    // Atributo privado
    let velocidadeAtual = 0

    // método público
    this.acelerar = function(){
        if(velocidadeAtual + delta <= VelocidadeMaxima){
            velocidadeAtual += delta
        } else{
            velocidadeAtual = VelocidadeMaxima
        }
    }

    // método público
    this.getVelocidadeAtual = function(){
        return velocidadeAtual
    }
}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar
console.log(ferrari.getVelocidadeAtual())