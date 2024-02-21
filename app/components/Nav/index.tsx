import React, { HTMLProps, ReactNode, useCallback, useEffect, useState } from 'react'
import { useNavbarContext } from '@/states'
import { Footer, NavWrapper } from 'components'
import { NavListProps } from '@/types'

const Nav = (props: { children: ReactNode; className?: HTMLProps<HTMLElement>['className'] }) => {
  const { openNavbar, setOpenNavbar } = useNavbarContext()
  const [navList, setNavList] = useState<NavListProps[]>([
    { title: 'About', href: '#', target: '_self' },
    { title: ' A To Z Restorasi', href: '#', target: '_self' },
    { title: 'Story', href: '#', target: '_self' },
    { title: 'Diary', href: '#', target: '_self' },
    { title: 'Kinerja', href: '#', target: '_self' },
  ])

  const handleWindowResize = useCallback(() => {
    window.innerWidth >= 960 && setOpenNavbar(false)
  }, [setOpenNavbar])

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize)

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [handleWindowResize])

  return (
    <React.Fragment>
      <div className='sticky inset-0 z-10 h-fit min-w-full rounded-none border-none bg-black px-2 py-4 shadow-sm shadow-gray-900 2xl:px-32'>
        <NavWrapper
          data={navList}
          openNavbar={openNavbar}
          setOpenNavbar={(open) => setOpenNavbar(open)}
        />
      </div>
      <div className={`mx-auto bg-transparent ${props.className}`}>{props.children}</div>
      <Footer />
    </React.Fragment>
  )
}

export default Nav
