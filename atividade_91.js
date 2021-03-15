let valor_produto = 500; 

for (let contador = 1; contador < 5; contador++) {
    let valo_parcela = valor_produto / contador; 

    console.log("Numero de parcelas: " + contador + " - valor da parcela: R$ "+ valo_parcela.toFixed(2))
}