export type TypeOrder = {
    codiceFiscale: string,
    nome: string,
    cognome: string,
    email: string,
    giftcards: Array<TypeGiftcard>
}

export type TypeGiftcard = {
    tipologia: string,
    taglio: number,
    quantita: number
}

export type TypeProprietario = {
    codiceFiscale: string,
    nome: string,
    cognome: string,
    email: string,
}