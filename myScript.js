var elencoCognomi = ['Bianchi','Neri','Rossi','Verdi','Gialli'];
var cognomeUtente = prompt("Quale è il tuo cognome?");
elencoCognomi.push(cognomeUtente);
var datiFiltrati = []
datiFiltrati.push(cognomeUtente);

elencoCognomi.sort();
var i = 0;

while (i < elencoCognomi.length) {

    var elementoDaAnalizzare = elencoCognomi[i];

    for (var j = 0; j < datiFiltrati.length; j++) {
        var elementoGiaFiltrato = datiFiltrati[j];
        if (elementoDaAnalizzare === elementoGiaFiltrato) {
            console.log(cognomeUtente + ' è nella posizione ' + i);
        }
    }
        i++

}
console.log(elencoCognomi);
