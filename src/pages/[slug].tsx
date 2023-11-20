import React from 'react'
import { client } from '../../sanity/lib/client';
import { QSingleCategory, QSingleProducts, Qproducts } from '../../sanity/queries';
import Product from './product/product';
import Category from './category';

const Slug = ({ productRes, categoryRes, productsRes }: any) => {
     return (
          <>
               {
                    productRes ? <Product productRes={productRes} /> : <Category categoryRes={categoryRes} productsRes={productsRes}/>
               }
          </>
     )
}

export default Slug



export async function getServerSideProps(pageContext: any) {
     const slug = pageContext.query.slug;

     const productRes = await client.fetch(QSingleProducts, { slug });
     const categoryRes = await client.fetch(QSingleCategory, { slug });
     const productsRes = await client.fetch(Qproducts);

     if (!productRes && categoryRes?.length < 1) {
          return {
               notFound: true,
          }
     }

     return {
          props: {
               productRes, categoryRes, productsRes,
               preview: true
          }
     };
}