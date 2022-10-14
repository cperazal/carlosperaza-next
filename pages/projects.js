import {createClient} from 'contentful'
import ProjectItem from '../components/projects/ProjectItem';
import { useContext, useEffect, useState } from 'react';
import ContextApp from '../context';
import Head from 'next/head';

export async function getStaticProps() {

    const client = createClient({
      space: process.env.NEXT_PUBLIC_CONTENTFUL_ID_SPACE,
      accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
    })
  
    const response = await client.getEntries({
      content_type: 'proyectos'
    })
  
    return {
      props: {
        projects_c: response.items
      }, 
      revalidate: 10,
    }
  }

const Experience = ({projects_c}) => {

    const {locale} = useContext(ContextApp);
    const [projects, setProjects] = useState(projects_c);

    useEffect(() => {
        if(locale){
            getProjects();
        }
      }, [locale]);

    const getProjects = async () => {
        const client = createClient({
            space: process.env.NEXT_PUBLIC_CONTENTFUL_ID_SPACE,
            accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
            })
        
        const response = await client.getEntries({
            content_type: 'proyectos', locale: locale
        })

        setProjects(response.items);
    }

    return ( 
        <>
            <Head>        
                <title>Projects | {process.env.NEXT_PUBLIC_PAGE_TITLE}</title>        
            </Head>
            <section className="ftco-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="row">
                                {
                                    (projects.length > 0) ? (
                                        projects.map((proj, index) => (
                                            <ProjectItem 
                                                key={index}
                                                project={proj}
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