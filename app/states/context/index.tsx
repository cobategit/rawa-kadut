'use client'

import type { PropsWithChildren } from 'react'
import { createContext, useContext, useState } from 'react'
import { NavbarContextProps } from '@/types'

const NavbarContext = createContext<NavbarContextProps>(undefined!)

export function NavbarProvider({ children }: PropsWithChildren<Record<string, unknown>>) {
  const [openNavbar, setOpenNavbar] = useState<boolean>(false)

  return (
    <NavbarContext.Provider
      value={{
        openNavbar: openNavbar,
        setOpenNavbar: setOpenNavbar,
      }}
    >
      {children}
    </NavbarContext.Provider>
  )
}

export function useNavbarContext(): NavbarContextProps {
  const context = useContext(NavbarContext) as NavbarContextProps | undefined

  if (!context) {
    throw new Error('useSidebarContext should be used within the SidebarContext provider!')
  }

  return context
}
