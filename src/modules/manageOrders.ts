import { TypeOrder, TypeGiftcard, TypeProprietario } from "../types/type";

const order: TypeOrder = {
    codiceFiscale: '',
    nome: '',
    cognome: '',
    email: '',
    giftcards: []
}



export function newOrder(datiProprietario : TypeProprietario) {
    // Verifica se tutti i dati anagrafici sono presenti e validi
    if (!datiProprietario || !datiProprietario.codiceFiscale || !datiProprietario.nome || !datiProprietario.cognome || !datiProprietario.email) {
        throw new Error('Dati anagrafici mancanti o non validi');
    }

    // Verifica la validità del codice fiscale
    const codiceFiscale = /^[A-Z]{6}\d{2}[A-Z]\d{2}[A-Z]\d{3}[A-Z]$/;
    if (!codiceFiscale.test(datiProprietario.codiceFiscale)) {
        throw new Error('Codice fiscale non valido');
    }

    // Verifica la validità del nome
    const nome = /^[A-Za-z]+$/;
    if (!nome.test(datiProprietario.nome)) {
        throw new Error('Nome non valido');
    }

    // Verifica la validità del cognome
    const cognome = /^[A-Za-z]+$/;
    if (!cognome.test(datiProprietario.cognome)) {
        throw new Error('Cognome non valido');
    }

    // Verifica la validità dell'email
    const email = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!email.test(datiProprietario.email)) {
        throw new Error('Email non valida');
    }

    // Verifica la validità dei dati anagrafici
    order.codiceFiscale = datiProprietario.codiceFiscale;
    order.nome = datiProprietario.nome;
    order.cognome = datiProprietario.cognome;
    order.email = datiProprietario.email;

    // Restituisce l'ordine
    return order;
}

export function addGiftcard(giftcards: TypeGiftcard) {
    // Verifica che la giftcard può essere solo digitale o cartacea
    const tipologia = ['Digitale', 'Cartacea'];
    if (!tipologia.includes(giftcards.tipologia)) {
        throw new Error('Tipologia non valida');
    }

    // Verifica i tagli disponibili
    const taglio = [10, 20, 50, 100];
    if (!taglio.includes(giftcards.taglio)) {
        throw new Error('Taglio non valido');
    }

    // Verifica e accetta una quantità > 1 e <= 10
    const quantita = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    if (!quantita.includes(giftcards.quantita)) {
        throw new Error('Quantità non valida');
    }

    order.giftcards.push(giftcards);

    return order;
}