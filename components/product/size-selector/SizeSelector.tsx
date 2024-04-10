import type { Size } from "@/interfaces"
import clsx from "clsx"

interface Props {
  selectedSize: Size
  availableSizes: Size[]
}

export const SizeSelector = ( { selectedSize, availableSizes}: Props ) => {
  return (
    <div className="mb-5">
      <h3 className="font-bold mb-4">Sizes available</h3>

      <div className="flex">
        {availableSizes.map((size) => (
          <div
            key={size}
            className={
              clsx(
                'mx-2 hover:underline text-lg cursor-pointer',
                {
                  'underline': size === selectedSize
                }
              )
            }
          >
            {size}
          </div>
        ))}
      </div>

      
    </div>
  )
}
