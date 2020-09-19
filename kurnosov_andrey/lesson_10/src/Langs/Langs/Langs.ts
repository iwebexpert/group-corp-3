// Не получилось сделать export в index.ts 
enum Langs {
    RU = 'RU',
    EN = 'EN'
}

type LangsMap<T> = {
    [key in Langs]: T
}

type LangsNameList = {
    lang: keyof LangsMap<any>; 
    name: string
}[]

const langsNameMap: LangsMap<string> = {
    [Langs.RU]: 'Russian',
    [Langs.EN]: 'English',
};

const langsNameList: LangsNameList = Object.keys(langsNameMap).map(k => k as Langs).map(k =>({
    lang: k,
    name: langsNameMap[k]
}));

export { Langs, langsNameList }
export type {LangsNameList}