import {createClient} from 'contentful'
import ExperienceItem from "../components/experience/ExperienceItem";


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
        experiencia: response.items
      }, 
      revalidate: 10,
    }
  }

const Experience = ({experiencia}) => {
    return ( 
        <>
            <section className="ftco-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="row">
                                {
                                    (experiencia.length > 0) ? (
                                        experiencia.map((exp, index) => (
                                            <ExperienceItem 
                                                key={index}
                                                experiencia={exp}
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