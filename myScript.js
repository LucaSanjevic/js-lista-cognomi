var elencoCognomi = ['Bianchi','Neri','Rossi','Verdi','Gialli'];
var _cognomeUtente = prompt("Quale è il tuo cognome?");
var cognomeUtente = _cognomeUtente.charAt(0).toUpperCase(0) + _cognomeUtente.substring(1, _cognomeUtente.length)
elencoCognomi.push(cognomeUtente);
var datiFiltrati = []
datiFiltrati.push(cognomeUtente);
elencoCognomi.sort();
var i = 0;

while (i < elencoCognomi.length) {

    var elementoDaAnalizzare = elencoCognomi[i];
        var elementoGiaFiltrato = datiFiltrati[0];
        if (elementoDaAnalizzare === elementoGiaFiltrato) {
            console.log(cognomeUtente + ' è nella posizione ' + i);
        }
        i++

}
console.log(elencoCognomi);
