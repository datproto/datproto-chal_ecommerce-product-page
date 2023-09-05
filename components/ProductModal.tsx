import React from 'react'
import BackgroundOverlay from '@/components/BackgroundOverlay'
import Carousel from '@/components/Carousel'
import Button from '@/components/Button'
import CloseIcon from '@/components/icons/CloseIcon'

interface IProductModal {
  productPhotos: string[]
  isOpenProductModal?: boolean
  setOpenProductModal?: React.Dispatch<React.SetStateAction<any>>
}

const ProductModal = ({productPhotos, isOpenProductModal, setOpenProductModal}: IProductModal) => {
  const closeProductModal = () => {
    setOpenProductModal && setOpenProductModal(false)
  }

  return (
    <>
      {isOpenProductModal && (
        <div className="hidden xl:block">
          <div
            className="absolute bottom-0 left-0 right-0 top-1/2 z-[100] mx-auto flex h-[750px] w-[600px] -translate-y-1/2 flex-col gap-6">
            <Button buttonHandler={closeProductModal} customClass="self-end">
              <CloseIcon className="h-[20px] w-[20px] fill-white"/>
            </Button>

            <Carousel needControl={true} productPhotos={productPhotos}
                      customClass={'gap-6'}
                      customThumbnailsContainerClass="w-full gap-8 px-12 mt-3 box-sizing"/>
          </div>

          <BackgroundOverlay/>
        </div>
      )}
    </>
  )
}

export default ProductModal