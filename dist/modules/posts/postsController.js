import { fetchPosts } from './postsService.js';
import { renderPosts } from './postsRenderer.js';
export class PostsController {
    constructor() {
        this.elements = {
            loadBtn: document.querySelector('#loadPosts'),
            container: document.querySelector('#posts')
        };
    }
    init() {
        this.attachEventListeners();
    }
    attachEventListeners() {
        this.elements.loadBtn?.addEventListener('click', () => this.loadPosts());
    }
    async loadPosts() {
        if (!this.elements.container) {
            console.error('Posts container not found');
            return;
        }
        try {
            const posts = await fetchPosts();
            renderPosts(posts, this.elements.container);
        }
        catch (error) {
            console.error('Failed to load posts:', error);
            this.elements.container.innerHTML = '<p>Failed to load posts. Please try again.</p>';
        }
    }
}
export function initPosts() {
    const postsController = new PostsController();
    postsController.init();
}
