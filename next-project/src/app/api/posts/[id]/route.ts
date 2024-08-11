import { postData } from '../posts';

export function GET(_request: Request, context: { params: { id: string } }) {
    const { id } = context.params;

    if (Number.isNaN(Number(id))) {
        return new Response(JSON.stringify({ message: 'Invalid ID' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' },
        });
    }

    const post = postData.find((post) => post.id === Number(id));

    if (!post) {
        return new Response(JSON.stringify({ message: 'Post not found' }), {
            status: 404,
            headers: { 'Content-Type': 'application/json' },
        });
    }

    return new Response(JSON.stringify(post), {
        headers: { 'Content-Type': 'application/json' },
    });
}
