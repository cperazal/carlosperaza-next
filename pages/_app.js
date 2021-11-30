import '../styles/globals.css'
import { motion } from 'framer-motion';
import Layout from '../components/layout/Layout';

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      {/* <Layout>
        
          <motion.div initial="pageInitial" key={router.route} animate="pageAnimate" transition={{ delay: 0.2 }} 
            variants={{
              pageInitial: {
                opacity: 0,
              },
              pageAnimate: {
                opacity: 1
              },}}
            > */}

                <Component {...pageProps} />

          {/* </motion.div>
        
      </Layout> */}
    </>

  )
}

export default MyApp
