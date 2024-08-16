'use client';

import { use, useState } from 'react';

export default function Dashboard() {
    const [name, setName] = useState('');

    console.log('Dashboard Page Rendered on the Client');

    return (
        <>
            <h1>Dashboard Page</h1>
            <p>This is the dashboard page.</p>
            <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
            <p>Hello, {name}!</p>
        </>
    );
}
