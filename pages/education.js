import {createClient} from 'contentful'
import EducationItem from "../components/education/EducationItem";
import { useContext, useEffect, useState } from 'react';
import ContextApp from '../context';
import Head from 'next/head';

export async function getStaticProps() {

    const client = createClient({
      space: process.env.NEXT_PUBLIC_CONTENTFUL_ID_SPACE,
      accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
    })
  
    const response = await client.getEntries({
      content_type: 'educacion'
    })
  
    return {
      props: {
        education_c: response.items
      }, 
      revalidate: 10,
    }
  }

const Education = ({education_c}) => {

    const {locale} = useContext(ContextApp);
    const [education, setEducation] = useState(education_c);
    
    useEffect(() => {
        if(locale){
            getEducation();
        }
      }, [locale]);

    const getEducation = async () => {
        const client = createClient({
            space: process.env.NEXT_PUBLIC_CONTENTFUL_ID_SPACE,
            accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
          });
    
        const response = await client.getEntries({
            content_type: 'educacion', locale: locale
        });

        setEducation(response.items);

    }

    return ( 
        <>
            <Head>        
                <title>Education | {process.env.NEXT_PUBLIC_PAGE_TITLE}</title>        
            </Head>
            <section className="ftco-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="row">
                                {
                                    (education.length > 0) ? (
                                        education.map((edu, index) => (
                                            <EducationItem 
                                                key={index}
                                                education={edu}
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
 
export default Education;