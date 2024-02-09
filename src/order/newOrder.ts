function newOrder(datiAnagrafici) {
    // Verifica se tutti i dati anagrafici sono presenti e validi
    if (!datiAnagrafici || !datiAnagrafici.codiceFiscale || !datiAnagrafici.nome || !datiAnagrafici.cognome || !datiAnagrafici.email) {
        throw new Error('Dati anagrafici mancanti o non validi');
    }

    // Verifica la validità del codice fiscale
    const codiceFiscale = /^[A-Z]{6}\d{2}[A-Z]\d{2}[A-Z]\d{3}[A-Z]$/;
    if (!codiceFiscale.test(datiAnagrafici.codiceFiscale)) {
        throw new Error('Codice fiscale non valido');
    }

    return {
        codiceFiscale: datiAnagrafici.codiceFiscale,
        nome: datiAnagrafici.nome,
        cognome: datiAnagrafici.cognome,
        email: datiAnagrafici.email,
        giftcards: []
    };
}  

export default newOrder;