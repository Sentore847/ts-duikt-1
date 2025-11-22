import { initModal } from './modules/modal/modal.js';
import { initPosts } from './modules/posts/postsController.js';
import { initScrollHandler } from './modules/scroll/scrollHandler.js';
function initApp() {
    initModal();
    initPosts();
    initScrollHandler();
    console.log('Application initialized successfully');
}
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
}
else {
    initApp();
}
