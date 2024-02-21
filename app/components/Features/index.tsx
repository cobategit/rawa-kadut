import { useState } from 'react'
import { FeaturesCard } from 'components'
import { FeaturesCardProps } from '@/types'

const Features = () => {
  const [features, setFeatures] = useState<FeaturesCardProps[]>([
    {
      image_url: '/photos/photos_4.jpg',
      title: 'Adu Cepat di Rawa Kadut',
      description:
        'Luasnya ilalang menjadi tengara masa lalu yang menggelayuti Way Kambas. Untuk menumpas rumput tangguh itu, hutan ditumbuhkan kembali. Namun, itu bukan upaya mudah. Adu balap dengan ilalang dan mengalahkan kebakaran.',
    },
    {
      image_url: '/photos/photos_3.jpg',
      title: 'Way Kambas, Tenggelam Dalam Balutan Ilalang',
      description:
        'Tersuruk-suruk menyusup ilalang. Bukannya surut, justru menebalkan tekad: ilalang diganti hutan lebat! Di Rawa Kadut jalan panjang, berliku, dan berstamina ekstra itu bermula.',
    },
  ])

  return (
    <div className='mx-10 mt-20 border-t-[0.15rem] border-t-gray-500 bg-white py-10 md:mx-20 2xl:mx-40'>
      <div className='flex flex-col space-y-8 px-0 md:px-24'>
        <span className='text-primary-800 px-0 text-2xl font-extrabold uppercase md:px-6'>
          More Features
        </span>
        <div className='flex flex-row flex-wrap items-start justify-start'>
          {features.map((item, index) => (
            <FeaturesCard
              key={index}
              description={item.description}
              image_url={item.image_url}
              title={item.title}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Features
