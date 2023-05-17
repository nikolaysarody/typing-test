export interface FishText {
    status: string;
    text: string;
}
export enum Type {
    sentence = 'sentence',
    paragraph = 'paragraph',
    title = 'title',
}
export enum Format {
    json = 'json',
    html = 'html',
}
