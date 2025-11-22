import { initModal } from './modules/modal/modal';
import { initPosts } from './modules/posts/postsController';
import { initScrollHandler } from './modules/scroll/scrollHandler';

function initApp(): void {
    initModal();
    
    initPosts();
    
    initScrollHandler();
    
    console.log('Application initialized successfully');
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}