const modal: HTMLElement | null = document.querySelector('.modal');
const openBtn: HTMLElement | null = document.querySelector('#openModal');
const closeBtn: HTMLElement | null = document.querySelector('#closeModal');

openBtn?.addEventListener('click', () => {
    modal!.style.display = 'block';
});

closeBtn?.addEventListener('click', () => {
    modal!.style.display = 'none';
});

window.addEventListener('scroll', () => {
    console.log('Scrolling...');
});

async function loadPosts(): Promise<void> {
    const container = document.querySelector('#posts');
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
    const data: { title: string; body: string }[] = await res.json();

    container!.innerHTML = data
        .map(post => `<div class="post"><h3>${post.title}</h3><p>${post.body}</p></div>`)
        .join('');
}

loadPosts();
