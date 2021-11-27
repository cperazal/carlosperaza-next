import Image from 'next/image';
import styles from './reward.module.css';
import Link from 'next/link';

const RewardsItem = ({reward}) => {
    return ( 
        <div className="col-md-12">
            {
                (reward.fields.imagen) ? (
                    <div className={styles.imgReward}>
                        <Image 
                            src={`https:${reward.fields.imagen.fields.file.url}`}
                            layout="responsive"
                            width="200"
                            height="200"
                            alt={reward.fields.imagen.fields.title}
                            />
                    </div> 
                ):(
                    null
                )
            }        
            <div className="blog-entry animated fadeInDown">                
                <div className="text pt-2 mt-3">
                    <h3 className="mb-1 text-primary"><span>{reward.fields.titulo}</span></h3>
                    <span className="text-secondary"><a href={(reward.fields.url ? reward.fields.url : "#")} target="_blank" rel="noreferrer">{reward.fields.institucion}</a></span>
                </div>
                {
                    (reward.fields.archivo) ? (
                        <>
                            <a href={reward.fields.archivo.fields.file.url} target="_blank" rel="noreferrer">
                                <div className={styles.ImgThumbnails}>
                                    <Image 
                                        src={`https:${reward.fields.thumbnails.fields.file.url}`}
                                        layout="responsive"
                                        width={100}
                                        height={130}
                                    />
                                </div>
                                <small>{reward.fields.archivo.fields.title}</small>
                            </a>
                        </>
                    ):(
                        null
                    )
                }
            </div>
            <hr/>
        </div>
     );
}
 
export default RewardsItem;