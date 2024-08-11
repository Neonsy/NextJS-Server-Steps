import { postData } from './posts';

export function GET() {
    return new Response(JSON.stringify(postData), {
        headers: { 'Content-Type': 'application/json' },
    });
}
