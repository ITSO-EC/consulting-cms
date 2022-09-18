export interface Post {
    id?: number;
    title: string;
    body: boolean;
    userId: number;
    tags: Array<string>;
    reactions: number
}