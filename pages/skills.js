import {createClient} from 'contentful'
import Head from 'next/head';
import { useContext } from 'react';
import ContextApp from '../context';

export async function getStaticProps() {

    const client = createClient({
      space: process.env.NEXT_PUBLIC_CONTENTFUL_ID_SPACE,
      accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
    })
  
    const response = await client.getEntries({
      content_type: 'software'
    })
  
    return {
      props: {
        software: response.items
      }, 
      revalidate: 10,
    }
  }

const Education = ({software}) => {

    const {locale} = useContext(ContextApp);

    return ( 
        <>
            <Head>
                <link rel="stylesheet" href="css/skills.css" />  
                <title>Skills | {process.env.NEXT_PUBLIC_PAGE_TITLE}</title>        
            </Head>
            <section className="ftco-section">
                <div className="container">
                    <h2 align="center">{(locale === 'es-419') ? 'Habilidades': 'Skills'}</h2>
                    <div className="row pt-4">
                        <div className="col-12">
                                {
                                    (software.map((soft, index) => {
                                        return (
                                        <div key={index} className="pt-2 row">
                                            <div align="center" className="col-2 center">
                                                <div 
                                                    className="dev-icon" 
                                                    style={{backgroundImage: `url(${soft.fields.url_icono})`}} 
                                                    title={soft.fields.nombre}>
                                                </div>
                                            </div>
                                            <div className="col-8 pt-2">
                                                <div className="progress">
                                                    <div className="progress-bar bar-color" role="progressbar" style={{width: soft.fields.nivel + "%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                            
                                        </div>
                                        )
                                    }))
                                }
                        </div>
                    </div>
                </div>
            </section>   
        </>
     );
}
 
export default Education;