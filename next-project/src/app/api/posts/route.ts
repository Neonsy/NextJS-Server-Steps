import { NextRequest } from 'next/server';
import { postData } from './posts';

export function GET(request: NextRequest) {
    const query = request.nextUrl.searchParams;

    const searchTerm = query.get('search');

    if (searchTerm) {
        const filteredPosts = postData.filter((post) => post.content.includes(searchTerm));

        return new Response(JSON.stringify(filteredPosts), {
            headers: { 'Content-Type': 'application/json' },
        });
    }

    return new Response(JSON.stringify(postData), {
        headers: { 'Content-Type': 'application/json' },
    });
}

export async function POST(request: Request) {
    const { content } = await request.json();

    const newPost = {
        id: postData.length + 1,
        content,
    };

    postData.push(newPost);

    return new Response(JSON.stringify(newPost), {
        headers: { 'Content-Type': 'application/json' },

        status: 201,
    });
}
