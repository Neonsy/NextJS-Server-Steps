'use client';

export default function ErrorWrapper({ error }: { error: Error }) {
    return (
        <>
            <h1>Error Page</h1>
            <p>{error.message}</p>
        </>
    );
}
