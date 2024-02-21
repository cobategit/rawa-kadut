'use client'

import '../../globals.css'

import { ReactNode } from 'react'
import { Nav } from 'components'

const Layout = (props: { children?: ReactNode }) => <Nav>{props.children}</Nav>

export default Layout
