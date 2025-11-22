
import { Post } from '../../types';

const API_URL = 'https://jsonplaceholder.typicode.com/posts?_limit=5';

export async function fetchPosts(): Promise<Post[]> {
    try {
        const response: Response = await fetch(API_URL);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data: Post[] = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching posts:', error);
        throw error;
    }
}