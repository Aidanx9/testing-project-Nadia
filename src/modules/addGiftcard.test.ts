import { newOrder, addGiftcard } from './manageOrders';

describe('Test della funzione addGiftcard', () => {
    test('Aggiunge una giftcard', () => {
        // Aggiungo una giftcard valida
        // Verifico che la giftcard sia stata aggiunta
        const giftcard = 
                {
                    tipologia: 'Digitale',
                    taglio: 10,
                    quantita: 1
                }

        const giftcards = addGiftcard(giftcard);

        expect(giftcards).toEqual([{ tipologia: 'Digitale', taglio: 10, quantita: 1 }]);
    });

    test('Aggiunge una giftcard tipologia non valida', () => {
        // Aggiungo una giftcard non valida
        // Verifico che la giftcard non sia stata aggiunta
        const giftcard =
                {
                    tipologia: 'Digitale e cartacea',
                    taglio: 10,
                    quantita: 1
                }

        const giftcards = addGiftcard(giftcard);

        expect(giftcards).toEqual([{ tipologia: 'Digitale e cartacea', taglio: 10, quantita: 1 }]);
    });

    test('Aggiunge una giftcard quantità non valida', () => {
        // Aggiungo una giftcard non valida
        // Verifico che la giftcard non sia stata aggiunta
        const giftcard =
                {
                    tipologia: 'Digitale',
                    taglio: 10,
                    quantita: 100
                }

        const giftcards = addGiftcard(giftcard);

        expect(giftcards).toEqual([{ tipologia: 'Digitale', taglio: 10, quantita: 100 }]);
    });

    test('Aggiunge una giftcard taglio non valido', () => {
        // Aggiungo una giftcard non valida
        // Verifico che la giftcard non sia stata aggiunta
        const giftcard =
                {
                    tipologia: 'Digitale',
                    taglio: 5,
                    quantita: 1
                }

        const giftcards = addGiftcard(giftcard);

        expect(giftcards).toEqual([{ tipologia: 'Digitale', taglio: 5, quantita: 1 }]);
    });
});