import { newOrder, addGiftcard } from './manageOrders';

describe('Test della funzione addGiftcard', () => {

    test('Aggiunge una giftcard', () => {
        const order = newOrder({
            codiceFiscale: 'RSSMRA80A01H501Q',
            nome: 'Mario',
            cognome: 'Rossi',
            email: 'test@test.it',
        });

        // Aggiungo una giftcard valida
        // Verifico che la giftcard sia stata aggiunta
        const giftcards =
        {
            tipologia: 'Digitale',
            taglio: 10,
            quantita: 1
        }

        const returnOrder = addGiftcard(giftcards);

        expect(returnOrder.giftcards.length).toBe(1);
        const returnedGiftcard = returnOrder.giftcards[0];
        expect(returnedGiftcard.tipologia).toBe('Digitale');
        expect(returnedGiftcard.taglio).toBe(10);
        expect(returnedGiftcard.quantita).toBe(1);

        //expect(giftcard).toEqual({ codicefiscale: '', nome: '', cognome: '', email: '', giftcards: [{ tipologia: 'Digitale', taglio: 10, quantita: 1 }] });
    });

    test('Aggiunge una giftcard tipologia non valida', () => {
        // Aggiungo una giftcard non valida
        // Verifico che la giftcard non sia stata aggiunta
        const giftcards =
        {
            tipologia: 'Digitale e cartacea',
            taglio: 10,
            quantita: 1
        }
        
        expect(()=> {addGiftcard(giftcards)}).toThrow('Tipologia non valida');
    });

    test('Aggiunge una giftcard quantità non valida', () => {
        // Aggiungo una giftcard non valida
        // Verifico che la giftcard non sia stata aggiunta
        const giftcards =
        {
            tipologia: 'Digitale',
            taglio: 10,
            quantita: 100
        }

        expect(()=> {addGiftcard(giftcards)}).toThrow('Quantità non valida');
    });

    test('Aggiunge una giftcard taglio non valido', () => {
        // Aggiungo una giftcard non valida
        // Verifico che la giftcard non sia stata aggiunta
        const giftcards =
        {
            tipologia: 'Digitale',
            taglio: 5,
            quantita: 1
        }

        expect(()=> {addGiftcard(giftcards)}).toThrow('Taglio non valido');
    });
});

describe('Test della funzione newOrder', () => {

    test('Crea un nuovo intestatario', () => {
        // Dati anagrafici validi
        const datiProprietario = {
            codiceFiscale: 'RSSMRA80A01H501Q',
            nome: 'Mario',
            cognome: 'Rossi',
            email: 'mario@example.com'
        };

        const ordine = newOrder(datiProprietario);


        expect(ordine).toEqual({
            codiceFiscale: 'RSSMRA80A01H501Q',
            nome: 'Mario',
            cognome: 'Rossi',
            email: 'mario@example.com',
            giftcards: []
        });
    });

    test('Nome non valido', () => {
        const datiProprietario = {
            codiceFiscale: 'RSSMRA80A01H501Q',
            nome: 'Mario1',
            cognome: 'Rossi',
            email: 'mario@example.com'
        };

        expect(()=> {newOrder(datiProprietario)}).toThrow('Nome non valido');
    });

    test('Cognome non valido', () => {
        const datiProprietario = {
            codiceFiscale: 'RSSMRA80A01H501Q',
            nome: 'Mario',
            cognome: 'Rossi1',
            email: 'mario@example.com'
        };

        expect(()=> {newOrder(datiProprietario)}).toThrow('Cognome non valido');
    });

    test('Codice fiscale non è valido', () => {
        const datiProprietario = {
            codiceFiscale: 'Codicenonvalido',
            nome: 'Mario',
            cognome: 'Rossi',
            email: 'mario@example.com'
        };

        expect(()=> {newOrder(datiProprietario)}).toThrow('Codice fiscale non valido');
    });

});