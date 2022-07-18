import '../styles/globals.css'
import { motion } from 'framer-motion';
import Layout from '../components/layout/Layout';
import ContextApp from '../context';
import { useEffect, useState } from 'react';
import { setCookie, getCookie } from 'cookies-next';

function MyApp({ Component, pageProps, router }) {

  const [locale, setLocale] = useState('');
  const setLanguage = (lang) => {
    setLocale(lang);
    setCookie('locale', lang);
  }

  useEffect(() => {
    if(getCookie('locale')){
      setLocale(getCookie('locale'));
    }
  })

  return (
    <>
      <ContextApp.Provider value={{locale: locale, setLanguage: setLanguage}}>
        <Layout>
            <motion.div initial="pageInitial" key={router.route} animate="pageAnimate" transition={{ delay: 0.2 }} 
              variants={{
                pageInitial: {
                  opacity: 0,
                },
                pageAnimate: {
                  opacity: 1
                },}}
              >
                  <Component {...pageProps} />
            </motion.div>
        </Layout>
      </ContextApp.Provider>
    </>

  )
}

export default MyApp
