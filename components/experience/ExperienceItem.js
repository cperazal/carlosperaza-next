import styles from './experience.module.css';
import Image from 'next/image';

const ExperienceItem = ({experiencia}) => {
    return ( 
        <div className="col-md-12">
            {
                (experiencia.fields.imagen) ? (
                    <div className={styles.imgExperience}>
                        <Image 
                            src={`https:${experiencia.fields.imagen.fields.file.url}`}
                            layout="fill"
                            alt={experiencia.fields.imagen.fields.title}
                            />
                    </div>
                ):(
                    null
                )
            }
            
            <div className="blog-entry animated fadeInDown">
                <div className="text pt-2 mt-3">
                    <h3 className="mb-1 text-primary"><span>{experiencia.fields.titulo}</span></h3>                    
                    <span className="text-secondary"><a href={(experiencia.fields.webEmpresa ? experiencia.fields.webEmpresa : "#")} target="_blank" rel="noreferrer">{experiencia.fields.empresa}</a></span>
                   
                    {
                        (experiencia.fields.webEmpresa) ? (
                            <div className="author d-flex align-items-center">
                                <div className="info">
                                    <h6><a href={experiencia.fields.webEmpresa} target="_blank" rel="noreferrer" style={{fontSize: "12px"}}>{experiencia.fields.webEmpresa}</a></h6>
                                </div>
                            </div>
                        ):(
                            null
                        )
                    }

                    <div>
                        <small> {experiencia.fields.pais}</small>
                        <small> | {experiencia.fields.modalidad}</small>
                    </div>
                    <div className="d-flex">
                        <small>{experiencia.fields.fechaInicio}</small>  
                        {
                            (experiencia.fields.fechaCulminacion) ? (
                                <>
                                    <small>&nbsp;&nbsp;-</small>
                                    <small className="pl-2">{experiencia.fields.fechaCulminacion}</small>
                                </>
                            ):(
                                null
                            )
                        }
                        
                    </div>
                    
                    <p className="mt-4">{experiencia.fields.descripcion}</p>
                    <div>
                        <h5 className="text-secondary">Tecnologías</h5>
                        <ul>
                        {
                            experiencia.fields.tecnologias.map((tec, index) => (
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