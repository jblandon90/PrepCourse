const invitados = {luna: {vegan: false}}
let contadorVeganos = 0;
    for(const Propiedad in invitados){
        if(invitados.hasOwnProperty(Propiedad)){
            if(invitados[Propiedad] === true){
                contadorVeganos++;
            }
        }
    }
    return contadorVeganos;
    