'use client';

export default function ErrorWrapper({ error, reset }: { error: Error; reset: () => void }) {
    return (
        <>
            <h1>Error Page</h1>
            <p>{error.message}</p>
            <button
                onClick={reset}
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold ml-3 my-3 py-2 px-4 rounded'>
                Try again
            </button>
        </>
    );
}
