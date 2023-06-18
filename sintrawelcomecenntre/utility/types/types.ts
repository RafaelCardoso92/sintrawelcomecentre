export type Language =  "en" | "pt";

export const isTypeOfLang = (x: unknown): x is Language => {
    const y = x as Language;
    return typeof y === 'string' && ( 'en' === y || 'pt' === y )
}
