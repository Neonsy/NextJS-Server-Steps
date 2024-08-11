export const dynamic = 'force-dynamic';

export default function Test() {
    return (
        <>
            <h1>Caching Test Page</h1>
            <p>Time: {new Date().toLocaleTimeString()}</p>
        </>
    );
}
