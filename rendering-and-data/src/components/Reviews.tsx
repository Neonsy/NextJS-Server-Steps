export default async function Reviews() {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return <h2>Review Component</h2>;
}
