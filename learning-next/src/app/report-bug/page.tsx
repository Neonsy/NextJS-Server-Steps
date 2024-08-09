'use client';

import { useRouter } from 'next/navigation';

export default function ReportBug() {
    const router = useRouter();

    const handleSubmit = () => {
        router.push('/');
    };

    return (
        <>
            <h1 className='ml-3 text-3xl font-bold'>Report Bug</h1>
            <button
                onClick={handleSubmit}
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold ml-3 my-3 py-2 px-4 rounded'>
                Report Bug
            </button>
        </>
    );
}
