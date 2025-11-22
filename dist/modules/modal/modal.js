export class ModalController {
    constructor() {
        this.elements = {
            modal: document.querySelector('.modal'),
            openBtn: document.querySelector('#openModal'),
            closeBtn: document.querySelector('#closeModal')
        };
    }
    init() {
        this.attachEventListeners();
    }
    attachEventListeners() {
        this.elements.openBtn?.addEventListener('click', () => this.openModal());
        this.elements.closeBtn?.addEventListener('click', () => this.closeModal());
    }
    openModal() {
        if (this.elements.modal) {
            this.elements.modal.style.display = 'flex';
        }
    }
    closeModal() {
        if (this.elements.modal) {
            this.elements.modal.style.display = 'none';
        }
    }
}
export function initModal() {
    const modalController = new ModalController();
    modalController.init();
}
