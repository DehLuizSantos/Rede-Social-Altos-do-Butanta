import { AppProps } from 'next/app'
import React from 'react'

import GlobalStyle from '../styles/global'
import { ThemeProvider } from 'styled-components'

import theme from '../styles/themes/dark'

import { Header } from '../components/Header'



const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyle />

      <Header />
    </ThemeProvider>
  )
}

export default MyApp
