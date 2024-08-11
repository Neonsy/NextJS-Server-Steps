import { postData } from './posts';

export function GET() {
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
