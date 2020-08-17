
export enum Langs {
    RU = 'RU',
    EN = 'EN'
}

export type LangString = {
    [key in Langs] : string 
} 
