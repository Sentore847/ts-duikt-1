export function initScrollHandler(): void {
    window.addEventListener('scroll', handleScroll);
}

function handleScroll(): void {
    console.log('Scrolling...');
}