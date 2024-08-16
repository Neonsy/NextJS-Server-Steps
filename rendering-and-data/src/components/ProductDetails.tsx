export default async function ProductDetails() {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return <h2>Product Details Component</h2>;
}
