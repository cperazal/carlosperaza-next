import {createClient} from 'contentful'
import ProjectItem from '../components/projects/ProjectItem'

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
        projects: response.items
      }, 
      revalidate: 10,
    }
  }

const Experience = ({projects}) => {
    return ( 
        <>
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