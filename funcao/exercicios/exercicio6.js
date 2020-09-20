/* Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda retornará o valor da aplicação sob o regime de juros compostos.
 */
function montantesimples(capital, taxa, tempo){
    juros =  capital * taxa * tempo
    return console.log(`Com capital inicial de R$ ${capital}, com a taxa de ${taxa}% ano, no tempo de ${tempo} meses o montante vai ser de R$ ${capital + juros}`)
}
montantesimples(1200, 2/100, 10)