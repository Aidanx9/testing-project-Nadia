import newOrder from './newOrder';

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
            giftcards: [] // Inizialmente vuoto
        });
    });

    test('Dati non validi', () => {
        const datiProprietario = {
            codiceFiscale: 'RSSMRA80A01H501Q',
            nome: 'Mario1',
            cognome: 'Rossi1',
            email: 'mario@example.com'
        };
        const ordine = newOrder(datiProprietario);
        expect(ordine.nome).toBe('Mario1');
        expect(ordine.cognome).toBe('Rossi1');
    });

    test('Codice fiscale non è valido', () => {
        const datiProprietario = {
            codiceFiscale: 'Codicenonvalido',
            nome: 'Mario',
            cognome: 'Rossi',
            email: 'mario@example.com'
        };
        expect(() => {
            newOrder(datiProprietario);
        }).toThrow();
    });

});
