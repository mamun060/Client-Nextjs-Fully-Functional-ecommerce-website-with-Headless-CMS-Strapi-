import React from 'react';
import ProductCard from '@/Components/ProductCard';
import Wrapper from '@/Components/Wrapper';
import { useRouter } from 'next/router';

export default function Category() {
    const router = useRouter();
    const { slug } = router.query;
  return (
    <div>
        <Wrapper>
        <div className="text-center max-w-[800px] my-14 mx-auto mt-8 md:mt-0">
            <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                {slug}
            </div>
        </div>


        {/* product grid start */}
        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0'>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>
        {/* product grid end */}
        </Wrapper>
    </div>
  )
}
