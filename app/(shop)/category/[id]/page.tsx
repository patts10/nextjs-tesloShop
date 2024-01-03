import { ProductGrid, Title } from '@/components'
import { initialData } from '@/seed/seed'
import { notFound } from 'next/navigation'
import { Product, Category } from '@/interfaces'

interface Props {
  params: {
    id: Category
  }
}

const products = initialData.products

export default function Page({ params }: Props) {
  const { id } = params

  // if (id !== Category ) {
  //   notFound()
  // }

  const labels: Record<Category, string> = {
    'men': 'for men',
    'women': 'for women',
    'kid': 'for kids',
    'unisex': 'for everyone'
  }

  console.log(id)

  const filteredProducts = products.filter((product) => product.gender === id)
  

  return (
    <div>
      <Title
        title={`Articles ${labels[id]}`}
        subtitle={`Category: ${id}`}
        className='mb-2'
      />
      <ProductGrid products={filteredProducts} />
    </div>
  )
}
