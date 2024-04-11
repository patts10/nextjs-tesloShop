import Link from 'next/link'

import { QuantitySelector, Title } from '@/components'
import { initialData } from '@/seed/seed'
import Image from 'next/image'

const productInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2]
]

export default function Page() {
  return (
    <div className='flex justify-center items-center mb-72 px-10 sm:px-0'>
      <div className='flex flex-col W-[1000px]'>
        <Title title='Shopping Cart' />

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-10'>
          {/* shooping cart */}
          <div className='flex flex-col mt-5'>
            <span className='text-xl'>Add items</span>
            <Link href='/' className='underline mb-5'>
              Continue shopping
            </Link>

            {/* Items */}
            {productInCart.map((product) => (
              <div key={product.slug} className='flex mb-5'>
                <Image
                  src={`/products/${product.images[0]}`}
                  alt={product.title}
                  width={100}
                  height={100}
                  className='mr-5 rounded'
                  style={{
                    width: '100px',
                    height: '100px'
                  }}
                />

                <div>
                  <p>{product.title}</p>
                  <p>${product.price}</p>
                  <QuantitySelector quantity={3} />
                  <button className='underline mt-3'>Remove</button>
                </div>
              </div>
            ))}
          </div>

          {/* checkout */}
          <div className='bg-white rounded-xl shadow-xl p-7'>
            <h2 className='text-2xl mb-2'>order resume</h2>

            <div className='grid grid-cols-2'>
              <span>N° Products</span>
              <span className='text-right'>3 Items</span>
              <span>sub Total</span>
              <span className='text-right'>$ 100</span>
              <span>Fees (15%)</span>
              <span className='text-right'>$ 100</span>
              <span className='mt-5 text-2xl'>Total</span>
              <span className='mt-5 text-2xl text-right'>$ 100</span>
            </div>

            <div className='mt-5 mb-2 w-full'>
              <Link 
                className='flex btn-primary justify-center'
                href="/checkout/address">
                Checkout
              </Link>
            </div>
          </div>


        </div>
      </div>
    </div>
  )
}
