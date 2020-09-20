/* Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto,
elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três
parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3,
-5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:
“Delta é negativo”. */

// a = 1, b = -1 , c = -6
function bhaskara(b,a,c){
    padrao = - 4
    resultado = Math.pow(b, 2) + (padrao) * (a) * (c)

    if(resultado <= -1){
        console.log('Delta é negativo')
    }

    x1 = - - (-b) + Math.sqrt(resultado) / 2 * a
    x2 = - - (-b) - Math.sqrt(resultado) / 2 * a
    console.log(`X1 = ${Math.floor(x1)}`)
    console.log(`X2 = ${Math.floor(x2)}`)
}

bhaskara(-1, 1, -6)
