import styles from './experience.module.css';
import Image from 'next/image';

const ExperienceItem = ({experience, locale}) => {
    return ( 
        <div className="col-md-12">
            {
                (experience.fields.imagen) ? (
                    <div className={styles.imgExperience}>
                        <Image 
                            src={`https:${experience.fields.imagen.fields.file.url}`}
                            layout="fill"
                            alt={experience.fields.imagen.fields.title}
                            />
                    </div>
                ):(
                    null
                )
            }
            
            <div className="blog-entry animated fadeInDown">
                <div className="text pt-2 mt-3">
                    <h3 className="mb-1 text-primary"><span>{experience.fields.titulo}</span></h3>                    
                    <span className="text-secondary"><a href={(experience.fields.webEmpresa ? experience.fields.webEmpresa : "#")} target="_blank" rel="noreferrer">{experience.fields.empresa}</a></span>
                   
                    {
                        (experience.fields.webEmpresa) ? (
                            <div className="author d-flex align-items-center">
                                <div className="info">
                                    <h6><a href={experience.fields.webEmpresa} target="_blank" rel="noreferrer" style={{fontSize: "12px"}}>{experience.fields.webEmpresa}</a></h6>
                                </div>
                            </div>
                        ):(
                            null
                        )
                    }

                    <div>
                        <small> {experience.fields.pais}</small>
                        <small> | {experience.fields.modalidad}</small>
                    </div>
                    <div className="d-flex">
                        <small>{experience.fields.fechaInicio}</small>  
                        {
                            (experience.fields.fechaCulminacion) ? (
                                <>
                                    <small>&nbsp;&nbsp;-</small>
                                    <small className="pl-2">{experience.fields.fechaCulminacion}</small>
                                </>
                            ):(
                                null
                            )
                        }
                        
                    </div>
                    
                    <p className="mt-4">{experience.fields.descripcion}</p>
                    <div>
                        <h5 className="text-secondary">{(locale === 'es-419') ? 'Tecnologías': 'Technologies'}</h5>
                        <ul>
                        {
                            experience.fields.tecnologias.map((tec, index) => (
                                <li key={index}>{tec}</li>
                            ))
                        }
                        </ul>
                    </div>
                </div>
            </div>
            <hr/>
        </div>
        
     );
}
 
export default ExperienceItem;