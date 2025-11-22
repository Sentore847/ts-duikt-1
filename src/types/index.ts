export interface Post {
    title: string;
    body: string;
}

export interface ModalElements {
    modal: HTMLElement | null;
    openBtn: HTMLElement | null;
    closeBtn: HTMLElement | null;
}

export interface PostElements {
    loadBtn: HTMLElement | null;
    container: HTMLElement | null;
}