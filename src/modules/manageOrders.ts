import { TypeOrder, Giftcard } from "../types/type";

const order: TypeOrder = {
    codiceFiscale: '',
    nome: '',
    cognome: '',
    email: '',
    giftcards: []
}


export function newOrder(datiAnagrafici : TypeOrder) {
    // Verifica se tutti i dati anagrafici sono presenti e validi
    if (!datiAnagrafici || !datiAnagrafici.codiceFiscale || !datiAnagrafici.nome || !datiAnagrafici.cognome || !datiAnagrafici.email) {
        throw new Error('Dati anagrafici mancanti o non validi');
    }

    // Verifica la validità del codice fiscale
    const codiceFiscale = /^[A-Z]{6}\d{2}[A-Z]\d{2}[A-Z]\d{3}[A-Z]$/;
    if (!codiceFiscale.test(datiAnagrafici.codiceFiscale)) {
        throw new Error('Codice fiscale non valido');
    }

    order.codiceFiscale = datiAnagrafici.codiceFiscale;
    order.nome = datiAnagrafici.nome;
    order.cognome = datiAnagrafici.cognome;
    order.email = datiAnagrafici.email;

    return order;
}

export function addGiftcard(giftcard) {
    const tipologia = ['Digitale', 'Cartacea'];
    if (!tipologia.includes(giftcard.tipologia)) {
        throw new Error('Tipologia non valida');
    }

    const taglio = [10, 20, 50, 100];
    if (!taglio.includes(giftcard.taglio)) {
        throw new Error('Taglio non valido');
    }

    const quantita = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    if (!quantita.includes(giftcard.quantita)) {
        throw new Error('Quantità non valida');
    }

    order.giftcards.push(giftcard);

    return order;
}