import { Metadata } from 'next';

type Props = {
  params: {
    productId: string;
  };
};

export default function ProductDetails({ params }: Props) {
  return (
    <>
      <h1>Product Nr. {params.productId} - Details Page</h1>
      <p>This is the product details page for the product with ID {params.productId}.</p>
    </>
  );
}

export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `Product Details - ${params.productId}`,
  };
};
