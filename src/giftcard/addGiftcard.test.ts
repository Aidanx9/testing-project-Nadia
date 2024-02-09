describe('Test della funzione addGiftcard', () => {
    test('Aggiunge una giftcard', () => {
        // Aggiungo una giftcard valida
        // Verifico che la giftcard sia stata aggiunta
        const ordine = {
            codiceFiscale: 'RSSMRA80A01H501Q',
            nome: 'Mario',
            cognome: 'Rossi',
            email: 'mario@example.com',
            giftcards: [
                {
                    tipologia: 'Digitale',
                    taglio: 10,
                    quantita: 1
                }
            ]
        }

        const giftcard = addGiftcard(ordine);

        expect(ordine.giftcards).toEqual([{ tipologia: 'Digitale', taglio: 10, quantita: 1 }]);
    });

    test('Aggiunge una giftcard tipologia non valida', () => {
        // Aggiungo una giftcard non valida
        // Verifico che la giftcard non sia stata aggiunta
        const ordine = {
            codiceFiscale: 'RSSMRA80A01H501Q',
            nome: 'Mario',
            cognome: 'Rossi',
            email: 'mario@example.com',
            giftcards: [
                {
                    tipologia: 'Digitale e cartacea',
                    taglio: 10,
                    quantita: 1
                }
            ]
        }

        const giftcard = addGiftcard(ordine);

        expect(ordine.giftcards).toEqual([{ tipologia: 'Digitale e cartacea', taglio: 10, quantita: 1 }]);
    });

    test('Aggiunge una giftcard quantità non valida', () => {
        // Aggiungo una giftcard non valida
        // Verifico che la giftcard non sia stata aggiunta
        const ordine = {
            codiceFiscale: 'RSSMRA80A01H501Q',
            nome: 'Mario',
            cognome: 'Rossi',
            email: 'mario@example.com',
            giftcards: [
                {
                    tipologia: 'Digitale',
                    taglio: 10,
                    quantita: 100
                }
            ]
        }

        const giftcard = addGiftcard(ordine);

        expect(ordine.giftcards).toEqual([{ tipologia: 'Digitale', taglio: 10, quantita: 100 }]);
    });

    test('Aggiunge una giftcard taglio non valido', () => {
        // Aggiungo una giftcard non valida
        // Verifico che la giftcard non sia stata aggiunta
        const ordine = {
            codiceFiscale: 'RSSMRA80A01H501Q',
            nome: 'Mario',
            cognome: 'Rossi',
            email: 'mario@example.com',
            giftcards: [
                {
                    tipologia: 'Digitale',
                    taglio: 5,
                    quantita: 1
                }
            ]
        }

        const giftcard = addGiftcard(ordine);

        expect(ordine.giftcards).toEqual([{ tipologia: 'Digitale', taglio: 5, quantita: 1 }]);
    });
});