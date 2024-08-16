import { Suspense } from 'react';

import ProductDetails from '@/components/ProductDetails';
import Reviews from '@/components/Reviews';

export default function Product() {
    return (
        <>
            <h1>Product Page</h1>
            
            <Suspense fallback={<h2>Loading...</h2>}>
                <ProductDetails />
            </Suspense>

            <Suspense fallback={<h2>Loading...</h2>}>
                <Reviews />
            </Suspense>
        </>
    );
}
