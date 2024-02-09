export type TypeOrder = {
    codiceFiscale: string,
    nome: string,
    cognome: string,
    email: string,
    giftcards: Array<Giftcard>
}

export type Giftcard = {
    tipologia: string,
    taglio: number,
    quantita: number
}