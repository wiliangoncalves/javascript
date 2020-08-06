let dobro = function(a){
    return 2 * a
}

dobro = (a) =>{
    return 2 * a
} // Com chaves RETURN não é implícito.

dobro = a => 2 * a // RETURN é implícito.
console.log(dobro(Math.PI))

let ola = function(){
    return 'Olá'
}
ola = () => 'Olá'
ola = _ => 'Olá' // Possui um parâmetro.
console.log(ola())