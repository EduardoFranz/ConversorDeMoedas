function Converter() {
  var valorInformado = document.getElementById('valor')
  var valor = valorInformado.value

  //valor em dólar
  var valorEmDolarNumerico = parseFloat(valor)
  var valorEmDolar = valorEmDolarNumerico * 5.0
  console.log(valorEmDolar)

  var elementoValorConvertido = document.getElementById(
    'valorConvertidoEmDolar'
  )
  var valorConvertidoEmDolar =
    'O valor em dólar é: US$' + valorEmDolar.toFixed(2)
  elementoValorConvertido.innerHTML = valorConvertidoEmDolar

  //valor em euro

  var valorEmEuroNumerico = parseFloat(valor)
  var valorEmEuro = valorEmEuroNumerico * 5.5
  console.log(valorEmEuro)

  var elementoValorConvertidoEuro = document.getElementById(
    'valorConvertidoEmEuro'
  )
  var valorConvertidoEmEuro = 'O valor em euro é: €' + valorEmEuro.toFixed(2)
  elementoValorConvertidoEuro.innerHTML = valorConvertidoEmEuro
}
