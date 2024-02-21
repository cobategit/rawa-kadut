'use client'

import { NavbarProvider } from '@/states'
import { Features, Hero, Layout, Section } from '@/components'

export default function RootPage() {
  return (
    <NavbarProvider>
      <Layout>
        <Hero />
        <Section />
        <Features />
      </Layout>
    </NavbarProvider>
  )
}
