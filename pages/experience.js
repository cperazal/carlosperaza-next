import {createClient} from 'contentful'
import ExperienceItem from "../components/experience/ExperienceItem";
import { useContext, useEffect, useState } from 'react';
import ContextApp from '../context';
import Head from 'next/head';

export async function getStaticProps() {

    const client = createClient({
      space: process.env.CONTENTFUL_ID_SPACE,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
    })
  
    const response = await client.getEntries({
      content_type: 'experienciaLaboral'
    })
  
    return {
      props: {
        experiencie_c: response.items
      }, 
      revalidate: 10,
    }
  }

const Experience = ({experiencie_c}) => {

    const {locale} = useContext(ContextApp);
    const [experience, setExperience] = useState(experiencie_c);

    useEffect(() => {
        if(locale){
            getExperience();
        }
      }, [locale]);

    const getExperience = async () => {
        const client = createClient({
            space: process.env.CONTENTFUL_ID_SPACE,
            accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
        })
        
        const response = await client.getEntries({
         content_type: 'experienciaLaboral', locale: locale
        })

        setExperience(response.items);
    }

    return ( 
        <>
            <Head>        
                <title>Experience | {process.env.NEXT_PUBLIC_PAGE_TITLE}</title>        
            </Head>
            <section className="ftco-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="row">
                                {
                                    (experience.length > 0) ? (
                                        experience.map((exp, index) => (
                                            <ExperienceItem 
                                                key={index}
                                                experience={exp}
                                                locale={locale}
                                            />
                                        ))
                                    ):(
                                        null
                                    )
                                    
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>   
        </>
     );
}
 
export default Experience;