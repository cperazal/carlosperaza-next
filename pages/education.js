import {createClient} from 'contentful'
import EducationItem from "../components/education/EducationItem";

export async function getStaticProps(context) {

    const client = createClient({
      space: process.env.CONTENTFUL_ID_SPACE,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
    })
  
    const response = await client.getEntries({
      content_type: 'educacion'
    })
  
    return {
      props: {
        education: response.items
      }, 
    }
  }

const Education = ({education}) => {
    return ( 
        <>
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