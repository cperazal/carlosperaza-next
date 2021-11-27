import Image from 'next/image';
import styles from './education.module.css';

const EducationItem = ({education}) => {
    return ( 
        <div className="col-md-12">
            <div className={styles.imgEducation}>
                <Image 
                    src={`https:${education.fields.imagen.fields.file.url}`}
                    layout="responsive"
                    width="200"
                    height="200"
                    alt={education.fields.imagen.fields.title}
                    />
            </div>            
            <div className="blog-entry animated fadeInDown">
                
                <div className="text pt-2 mt-3">
                    <h3 className="mb-1 text-primary"><span>{education.fields.titulo}</span></h3>
                    <span className="text-secondary"><a href={(education.fields.url ? education.fields.url : "#")} target="_blank" rel="noreferrer">{education.fields.institucion}</a></span>
                    <br/>
                    <small>{education.fields.pais}</small>
                    {
                        (education.fields.url) ? (
                            <div className="author d-flex align-items-center">
                                <div className="info">
                                    <h6><a href={education.fields.url} target="_blank" rel="noreferrer" style={{fontSize: "12px"}}>{education.fields.url}</a></h6>
                                </div>
                            </div>
                        ):(
                            null
                        )
                    }
                    <div className="d-flex">
                        <small>{education.fields.fechaDeInicio}</small>  
                        {
                            (education.fields.fechaDeCulminacion) ? (
                                <>
                                    <small>&nbsp;&nbsp;-</small>
                                    <small className="pl-2">{education.fields.fechaDeCulminacion}</small>
                                </>
                            ):(
                                null
                            )
                        }
                        
                    </div>
                </div>
            </div>
            <hr/>
        </div>
     );
}
 
export default EducationItem;