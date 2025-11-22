import { PostElements, Post } from '../../types';
import { fetchPosts } from './postsService';
import { renderPosts } from './postsRenderer';

export class PostsController {
    private elements: PostElements;

    constructor() {
        this.elements = {
            loadBtn: document.querySelector('#loadPosts'),
            container: document.querySelector('#posts')
        };
    }

    public init(): void {
        this.attachEventListeners();
    }

    private attachEventListeners(): void {
        this.elements.loadBtn?.addEventListener('click', () => this.loadPosts());
    }

    private async loadPosts(): Promise<void> {
        if (!this.elements.container) {
            console.error('Posts container not found');
            return;
        }

        try {
            const posts: Post[] = await fetchPosts();
            renderPosts(posts, this.elements.container);
        } catch (error) {
            console.error('Failed to load posts:', error);
            this.elements.container.innerHTML = '<p>Failed to load posts. Please try again.</p>';
        }
    }
}

export function initPosts(): void {
    const postsController = new PostsController();
    postsController.init();
}