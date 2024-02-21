import { FooterItemListProps } from '@/types'
import Image from 'next/image'

const contents: FooterItemListProps[] = [
  {
    title: 'About',
    items: [{ title: 'Who We Are' }, { title: 'Way Kambas' }, { title: 'Restorasi Rawa Kadut' }],
  },
  {
    title: 'A to Z Restorasi',
    items: [
      { title: 'Konteks' },
      { title: 'Silvikultur' },
      { title: 'Penanggulangan Kebakaran' },
      { title: 'Pelibatan Masyarakat' },
    ],
  },
  {
    title: 'Story',
    items: [],
  },
  {
    title: 'Diary',
    items: [{ title: '2024' }, { title: '2023' }, { title: '2022' }],
  },
]

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='flex w-full flex-col bg-black px-4 py-8 2xl:px-32'>
      <div className='flex w-full flex-col items-start justify-around space-y-8 pb-14 pt-7 md:flex-row md:flex-wrap md:space-y-0'>
        {contents.map((item, index) => (
          <div key={index} className='flex flex-col space-y-3 font-bold'>
            <span className='text-xl uppercase text-white'>{item.title}</span>
            {item.items?.map((itemCh, indexCh) => (
              <div key={indexCh} className='flex flex-col space-y-1'>
                <span className='text-lg font-semibold lowercase text-white'>{itemCh.title}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className='h-10 w-full border-y-[0.5px] border-white bg-black md:h-24'></div>
      <div className='flex flex-col flex-wrap items-start justify-evenly space-y-5 py-8 md:flex-row md:items-center md:space-y-0'>
        <Image
          src='/logo.png'
          alt='navbar-logo'
          placeholder='blur'
          blurDataURL='/logo.png'
          height={0}
          width={0}
          sizes='100vw'
          style={{
            objectFit: 'contain',
          }}
          className='h-auto w-[12rem] bg-none md:w-[15rem] lg:w-[22rem]'
        />
        <div className='flex max-w-full flex-col space-y-3 md:max-w-[50%]'>
          <span className='text-base font-medium text-white md:text-lg'>
            Memulihkan ekosistem Way Kambas sehingga menjadi habitat yang aman dan nyaman bagi satwa
            setempat, seperti gajah, harimau, badak.
          </span>
          <span className='text-xs font-light text-white'>
            {`@ ${currentYear}  Auriga Nusantara | Privacy Statement | Charitable Solicitation Disclosures | Mobile Terms & Conditions | Notice of Nondiscrimination`}
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
