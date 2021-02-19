let valor_produto = 500;

for (let contador = 1; contador <= 5; contador++) {

   let valor_parcela = valor_produto / contador;

   console.log("Numero de parcelas:" + contador + " - valor da parcela: R$" + valor_parcela.toFixed(2));

}