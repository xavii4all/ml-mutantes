const MUTANT_SEQUENCE_DNA = ['AAAA', 'CCCC', 'GGGG', 'TTTT'];

function analyzeDNA(dna){
    /* 
        Te ha contratado a ti para que desarrolles un proyecto que detecte si un
        humano es mutante basándose en su secuencia de ADN.
        En donde recibirás como parámetro un array de Strings que representan cada fila de una tabla
        de (NxN) con la secuencia del ADN. Las letras de los Strings solo pueden ser: (A,T,C,G), las
        cuales representa cada base nitrogenada del ADN.

        Sabrás si un humano es mutante, si encuentras más de una secuencia de cuatro letras
        iguales , de forma oblicua, horizontal o vertical
    */
    const cant_filas = dna.length;

    // Recorremos las secuencias de adn de referencia que son de mutantes
    MUTANT_SEQUENCE_DNA.forEach(mutant_dna => {
        
        console.log(`Secuencia mutante actual: ${mutant_dna}\n`);

        // Recorremos cada fila dentro de la matriz
        for( let row = 0; row < cant_filas; row++ ){
            // console.log(`Matriz de búsqueda: ${dna[row]}`);
            
            let cant_filas = row.length;
            
            // Recorremos cada letra de la fila
            for( let col = 0; col < cant_filas; col++ ){
                findDnaSequence(dna, row, col, mutant_dna);
            }
        }
        console.log("_____________________________________");
    });
    
    
    return false;
}

function findDnaSequence(dna, row, col, sequence){
    console.log(dna);
    console.log(`Matriz de búsqueda: ${dna[row]}`);

}

module.exports = analyzeDNA;