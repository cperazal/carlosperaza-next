import {createClient} from 'contentful'
import RewardsItem from "../components/rewards/RewardsItem";
import { useContext, useEffect, useState } from 'react';
import ContextApp from '../context';

export async function getStaticProps() {

    const client = createClient({
      space: process.env.NEXT_PUBLIC_CONTENTFUL_ID_SPACE,
      accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
    })
  
    const response = await client.getEntries({
      content_type: 'certificados'
    })
  
    return {
      props: {
        rewards_c: response.items
      }, 
      revalidate: 10,
    }
  }

const Experience = ({rewards_c}) => {

    const {locale} = useContext(ContextApp);
    const [rewards, setRewards] = useState(rewards_c);

    useEffect(() => {
        if(locale){
            getRewards();
        }
      }, [locale]);

    const getRewards = async () => {

        const client = createClient({
            space: process.env.NEXT_PUBLIC_CONTENTFUL_ID_SPACE,
            accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
          })
        
        const response = await client.getEntries({
            content_type: 'certificados', locale: locale
        })

        setRewards(response.items);

    }

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