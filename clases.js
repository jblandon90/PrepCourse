//class Auto{
	//constructor(){
	//	this.puertas = puertas;
   	//	this.color = color;
   	//	this.marca = marca;
   	//	this.año = año;
   	//	this.ruedas = ruedas;
	//}
//}

//var miSegundoAuto = new Auto(4, 'Blanco', 'Fiat', 2015,  4)

//console.log(miSegundoAuto);
//console.log(miSegundoAuto.marca)

class LatinoAmerica {
	constructor(){
		this.paises = [];
	}
}

LatinoAmerica.prototype.agregarPais = function (pais){
	this.paises.push(pais);
};

var continente = new LatinoAmerica();
continente.agregarPais('Mexico');

console.log(continente.paises)