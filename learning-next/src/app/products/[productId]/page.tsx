export default function ProductDetails({ params }: { params: { productId: string } }) {
    return (
        <>
            <h1>Product Nr. {params.productId} - Details Page</h1>
            <p>This is the product details page for the product with ID {params.productId}.</p>
        </>
    );
}
