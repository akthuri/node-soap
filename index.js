const soap = require('soap-as-promised')

const wsdl = 'http://localhost:63582/Service.asmx?wsdl'

const parametros = {
	documento: {
		DocNum: '1000'
	}
}

soap.createClient(wsdl)
	.then((client) => client.Prueba(parametros))
	.then((response) => {
		console.log(response.PruebaResult)
	})
	.catch((err) => {
		console.log(err)
	})

