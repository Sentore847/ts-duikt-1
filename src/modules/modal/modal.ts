import { ModalElements } from '../../types';

export class ModalController {
    private elements: ModalElements;

    constructor() {
        this.elements = {
            modal: document.querySelector('.modal'),
            openBtn: document.querySelector('#openModal'),
            closeBtn: document.querySelector('#closeModal')
        };
    }

    public init(): void {
        this.attachEventListeners();
    }

    private attachEventListeners(): void {
        this.elements.openBtn?.addEventListener('click', () => this.openModal());
        this.elements.closeBtn?.addEventListener('click', () => this.closeModal());
    }

    private openModal(): void {
        if (this.elements.modal) {
            this.elements.modal.style.display = 'flex';
        }
    }

    private closeModal(): void {
        if (this.elements.modal) {
            this.elements.modal.style.display = 'none';
        }
    }
}

export function initModal(): void {
    const modalController = new ModalController();
    modalController.init();
}