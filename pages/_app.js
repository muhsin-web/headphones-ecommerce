import React from 'react'
import '@/styles/globals.css'

import { Layout } from '../components'
import {StateContext} from '../context/StateContext'
import { Toaster } from 'react-hot-toast'

export default function App({ Component, pageProps }) {
  return(
    <StateContext>
      <Layout>
        <Toaster />
         <Component {...pageProps} />
      </Layout>
    </StateContext>
  )
}
<<<<<<< HEAD
 
=======
>>>>>>> 005cf73b953e0ca79299e90364d7b5ecc052016c
