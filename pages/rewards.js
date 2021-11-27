import {createClient} from 'contentful'
import RewardsItem from "../components/rewards/RewardsItem";

export async function getStaticProps(context) {

    const client = createClient({
      space: process.env.CONTENTFUL_ID_SPACE,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
    })
  
    const response = await client.getEntries({
      content_type: 'certificados'
    })
  
    return {
      props: {
        rewards: response.items
      }, 
    }
  }

const Experience = ({rewards}) => {
    return ( 
        <>
            <section className="ftco-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="row">
                                {
                                    (rewards.length > 0) ? (
                                        rewards.map((rew, index) => (
                                            <RewardsItem 
                                                key={index}
                                                reward={rew}
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