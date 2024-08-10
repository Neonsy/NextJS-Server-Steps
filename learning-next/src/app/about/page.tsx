'use client';

function randomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function About() {
    if (randomNumber(0, 1) === 1) {
        throw new Error('An error has occurred on the About page');
    }
    return <h1>About Page</h1>;
}
