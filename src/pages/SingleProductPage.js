import React, { useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useProductsContext } from '../context/products_context'
import { single_product_url as url } from '../utils/constants'
import { formatPrice } from '../utils/helpers'
import {
  Loading,
  Error,
  ProductImages,
  AddToCart,
  Stars,
  PageHero,
} from '../components'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import router from "react-router-dom/es/Router";

const SingleProductPage = () => {
    const { id } = useParams();
    const history = useHistory();

    const {
      single_product_loading: loading,
      single_product_error: error,
      single_product: product,
      fetchSingleProduct } = useProductsContext()

    useEffect (() => {
      fetchSingleProduct(`${url}${id}`)// console.log(product)
    //     {
        //     "id": "recNZ0koOqEmilmoz",
        //     "stock": 10,
        //     "price": 59999,
        //     "shipping": true,
        //     "featured": true,
        //     "colors": [
        //         "#000",
        //         "#ff0000"
        //     ],
        //     "category": "living room",
        //     "images": [
        //         {
        //             "id": "attub6EG88kJKuYs8",
        //             "width": 1000,
        //             "height": 667,
        //             "url": "https://www.course-api.com/images/store/product-7.jpeg",
        //             "filename": "product-4.jpeg",
        //             "size": 49641,
        //             "type": "image/jpeg",
        //             "thumbnails": {
        //                 "small": {
        //                     "url": "https://www.course-api.com/images/store/product-7.jpeg",
        //                     "width": 54,
        //                     "height": 36
        //                 },
        //                 "large": {
        //                     "url": "https://www.course-api.com/images/store/product-7.jpeg",
        //                     "width": 768,
        //                     "height": 512
        //                 },
        //                 "full": {
        //                     "url": "https://www.course-api.com/images/store/product-7.jpeg",
        //                     "width": 3000,
        //                     "height": 3000
        //                 }
        //             }
        //         },
        //         {
        //             "id": "attaeT2Dex98o2jfW",
        //             "width": 1000,
        //             "height": 667,
        //             "url": "https://www.course-api.com/images/store/extra-product-1.jpeg",
        //             "filename": "extra-1.jpeg",
        //             "size": 102108,
        //             "type": "image/jpeg",
        //             "thumbnails": {
        //                 "small": {
        //                     "url": "https://www.course-api.com/images/store/extra-product-1.jpeg",
        //                     "width": 54,
        //                     "height": 36
        //                 },
        //                 "large": {
        //                     "url": "https://www.course-api.com/images/store/extra-product-1.jpeg",
        //                     "width": 768,
        //                     "height": 512
        //                 },
        //                 "full": {
        //                     "url": "https://www.course-api.com/images/store/extra-product-1.jpeg",
        //                     "width": 3000,
        //                     "height": 3000
        //                 }
        //             }
        //         },
        //         {
        //             "id": "attWsZasaaRD1P7mm",
        //             "width": 1000,
        //             "height": 714,
        //             "url": "https://www.course-api.com/images/store/extra-product-2.jpeg",
        //             "filename": "extra-2.jpeg",
        //             "size": 84418,
        //             "type": "image/jpeg",
        //             "thumbnails": {
        //                 "small": {
        //                     "url": "https://www.course-api.com/images/store/extra-product-2.jpeg",
        //                     "width": 50,
        //                     "height": 36
        //                 },
        //                 "large": {
        //                     "url": "https://www.course-api.com/images/store/extra-product-2.jpeg",
        //                     "width": 717,
        //                     "height": 512
        //                 },
        //                 "full": {
        //                     "url": "https://www.course-api.com/images/store/extra-product-2.jpeg",
        //                     "width": 3000,
        //                     "height": 3000
        //                 }
        //             }
        //         },
        //         {
        //             "id": "attTvaiDcADaAItLw",
        //             "width": 1000,
        //             "height": 650,
        //             "url": "https://www.course-api.com/images/store/extra-product-3.jpeg",
        //             "filename": "extra-3.jpeg",
        //             "size": 107838,
        //             "type": "image/jpeg",
        //             "thumbnails": {
        //                 "small": {
        //                     "url": "https://www.course-api.com/images/store/extra-product-3.jpeg",
        //                     "width": 55,
        //                     "height": 36
        //                 },
        //                 "large": {
        //                     "url": "https://www.course-api.com/images/store/extra-product-3.jpeg",
        //                     "width": 788,
        //                     "height": 512
        //                 },
        //                 "full": {
        //                     "url": "https://www.course-api.com/images/store/extra-product-3.jpeg",
        //                     "width": 3000,
        //                     "height": 3000
        //                 }
        //             }
        //         },
        //         {
        //             "id": "attdxQmF0aCH5I32F",
        //             "width": 1000,
        //             "height": 667,
        //             "url": "https://www.course-api.com/images/store/extra-product-4.jpeg",
        //             "filename": "extra-4.jpeg",
        //             "size": 99481,
        //             "type": "image/jpeg",
        //             "thumbnails": {
        //                 "small": {
        //                     "url": "https://www.course-api.com/images/store/extra-product-4.jpeg",
        //                     "width": 54,
        //                     "height": 36
        //                 },
        //                 "large": {
        //                     "url": "https://www.course-api.com/images/store/extra-product-4.jpeg",
        //                     "width": 768,
        //                     "height": 512
        //                 },
        //                 "full": {
        //                     "url": "https://www.course-api.com/images/store/extra-product-4.jpeg",
        //                     "width": 3000,
        //                     "height": 3000
        //                 }
        //             }
        //         }
        //     ],
        //     "reviews": 100,
        //     "stars": 3.6,
        //     "name": "entertainment center",
        //     "description": "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
        //     "company": "caressa"
        // }
    }, [id])

    useEffect(() => {
        if(error) {
            setTimeout(() => {
                history.push('/')
            }, 3000)
        }
    }, [error])

    if(loading) {
      return <Loading />
    }
    if(error) {
      return <Error />
    }

    const { name, price, description, stock, stars, reviews, id: sku, company, images } = product
    console.log('Product',product)

    return (
        <Wrapper>
          <PageHero title={name} proudct={true}/>
            <div className='section section-center page'>
                <Link to='/products' className='btn'>
                    back to products
                </Link>
                <div className='product-center'>
                    <ProductImages images={images} />
                    <section className='content'>
                        <h2>{name}</h2>
                        <Stars stars={stars} reviews={reviews} />
                        <h5 className='price'>{formatPrice(price)}</h5>
                        <p className='desc'>{description}</p>
                        <p className='info'>
                            <span>Available : </span>
                            {stock > 0 ? 'In stock' : 'Out of stock'}
                        </p>
                        <p className='info'>
                            <span>SKU : </span>
                            {sku}
                        </p>
                        <p className='info'>
                            <span>Brand : </span>
                            {company}
                        </p>
                        <hr />
                        {stock > 0 && <AddToCart product={product} />}
                    </section>
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`

export default SingleProductPage
