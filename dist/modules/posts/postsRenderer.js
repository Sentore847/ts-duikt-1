export function renderPosts(posts, container) {
    const htmlContent = posts
        .map((post) => `
            <div class="post">
                <h3>${escapeHtml(post.title)}</h3>
                <p>${escapeHtml(post.body)}</p>
            </div>
        `)
        .join('');
    container.innerHTML = htmlContent;
}
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}
