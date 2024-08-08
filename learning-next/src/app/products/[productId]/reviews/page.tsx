export default function Reviews({ params }: { params: { productId: string } }) {
    return <h1>All Reviews for Product {params.productId}</h1>;
}
