import Image from 'next/image'

const Hero = () => {
  return (
    <div className='grid min-h-[85vh] grid-cols-1 bg-none lg:grid-cols-2'>
      {/* left section */}
      <Image
        src='/photos/photos_1.jpg'
        alt='hero'
        placeholder='empty'
        blurDataURL='/photos/photos_1.jpg'
        height={0}
        width={0}
        sizes='100vw'
        style={{
          objectFit: 'cover',
          filter: 'brightness(130%)',
        }}
        className='h-full w-full'
      />
      {/* right section */}
      <div className='flex flex-col items-start justify-center bg-primary-900 px-10 py-10 md:pl-20'>
        <div className='flex flex-col space-y-10'>
          <div className='flex flex-col space-y-8'>
            <span className='text-xl font-bold uppercase text-white'>Feature</span>
            <div className='flex flex-col space-y-3'>
              <span className='text-4xl font-bold uppercase tracking-tight text-white'>
                All in A Day&apos;s
              </span>
              <span className='text-4xl font-bold uppercase tracking-tight text-white'>Work</span>
            </div>
          </div>
          <div className='flex flex-col items-start space-y-8'>
            <span className='max-w-xl text-lg font-normal leading-8 tracking-wide text-white'>
              Fajar Sandhika and his team fought fires that were ravaging a weed-tangled field at
              Rawa Kadut in Way Kambas National Park, Lampung. Their work saved some 22,000 trees in
              a 100-hectare reforestation program.
            </span>
            <Image
              src='/photos/photos_5.jpg'
              alt='hero'
              placeholder='empty'
              blurDataURL='/photos/photos_5.jpg'
              height={0}
              width={0}
              sizes='100vw'
              style={{
                objectFit: 'contain',
                filter: 'brightness(130%)',
              }}
              className='h-80 w-auto'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
