import styles from './projects.module.css';
import Image from 'next/image';

const ProjectItem = ({project, locale}) => {
    return ( 
        <div className="col-md-12">
            {
                (project.fields.imagen) ? (
                    <div className={styles.imgProjects}>
                        <Image 
                            src={`https:${project.fields.imagen.fields.file.url}`}
                            layout="fill"
                            alt={project.fields.imagen.fields.title}
                            />
                    </div>
                ):(
                    null
                )
            }
            
            <div className="blog-entry animated fadeInDown">
                <div className="text pt-2 mt-3">
                    <h3 className="mb-1 text-primary"><span>{project.fields.titulo}</span></h3>                    
                    <span className="text-secondary"><a href={(project.fields.url ? project.fields.url : "#")} target="_blank" rel="noreferrer">{project.fields.empresa}</a></span>
                   
                    {
                        (project.fields.url) ? (
                            <div className="author d-flex align-items-center">
                                <div className="info">
                                    <h6><a href={project.fields.url} target="_blank" rel="noreferrer" style={{fontSize: "12px"}}>{project.fields.url}</a></h6>
                                </div>
                            </div>
                        ):(
                            null
                        )
                    }

                   
                    
                    <p className="mt-4">{project.fields.descripcion}</p>
                    <div>
                        <h5 className="text-secondary">{(locale === 'es-419') ? 'Tecnologías': 'Technologies'}</h5>
                        <ul>
                        {
                            project.fields.tecnologias.map((tec, index) => (
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
 
export default ProjectItem;