import { FeaturesCardProps } from '@/types'
import Image from 'next/image'

const FeaturesCard = (props: FeaturesCardProps) => (
  <div className='mx-0 my-6 flex h-[38rem] w-96 flex-col shadow-lg md:mx-6 md:my-6'>
    <Image
      src={props.image_url!}
      alt={`${props.title}-img`}
      placeholder='empty'
      blurDataURL={props.image_url!}
      height={0}
      width={0}
      sizes='100vw'
      style={{
        objectFit: 'cover',
        filter: 'brightness(130%)',
      }}
      className='h-72 w-full'
    />
    <div className='flex h-full flex-1 flex-col items-start justify-start space-y-5 border-[0.15rem] border-t-0 border-gray-500 p-5'>
      <span className='text-left text-2xl font-bold text-black'>{props.title}</span>
      <span className='line-clamp-6 text-left font-normal leading-8 text-gray-700'>
        {props.description}
      </span>
    </div>
  </div>
)

export default FeaturesCard
