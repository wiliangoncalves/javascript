const pessoa = {
    saudacao: 'Bom dia!',
    falar(){
        console.log(this.saudacao)
    }
}
pessoa.falar()
const falar = pessoa.falar
falar() // Conflito entre paradimas: funcional e Orientada a Objeto.

const falardepessoa = pessoa.falar.bind(pessoa)
falardepessoa()