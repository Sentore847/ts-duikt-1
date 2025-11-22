
import { Post } from '../../types';

export function renderPosts(posts: Post[], container: HTMLElement): void {
    const htmlContent: string = posts
        .map((post: Post) => `
            <div class="post">
                <h3>${escapeHtml(post.title)}</h3>
                <p>${escapeHtml(post.body)}</p>
            </div>
        `)
        .join('');
    
    container.innerHTML = htmlContent;
}

function escapeHtml(text: string): string {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}