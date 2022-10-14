import {createClient} from 'contentful'
import Head from 'next/head';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext, useEffect, useRef } from 'react';
import ContextApp from '../context';

export async function getStaticProps() {

    const client = createClient({
      space: process.env.NEXT_PUBLIC_CONTENTFUL_ID_SPACE,
      accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
    })
  
    const response = await client.getEntries({
      content_type: 'personal_information'
    })
  
    return {
      props: {
        personal_data: response.items
      }, 
      revalidate: 10,
    }
  }

const Contact = ({personal_data}) => {

    const {locale} = useContext(ContextApp);
    const formContactRef = useRef();

    useEffect(() => {
      }, [locale]);

    const handleSubmit = async (event) => {

        event.preventDefault();

        if (event.target.name.value === "") {
            toast.warning("Ingrese su nombre");
            return;
        }
        if (event.target.email.value === "") {
            toast.warning("Ingrese su email");
            return;
        }
        if (event.target.subject.value === "") {
            toast.warning("Ingrese el asunto");
            return;
        }
        if (event.target.message.value === "") {
            toast.warning("Ingrese el mensaje");
            return;
        }

        toast.promise(
            sendEmail(event),
            {
              pending: 'Enviando...',
              success: {
                  render({data}){     
                    formContactRef.current.reset(); 
                    return 'El correo ha sido enviado';
                  },
              },
              error: 'Disculpe, ha ocurrido un error al enviar el mensaje'
            }
        );
        
    
    }

    const sendEmail = async (event) => {
        try {
            await fetch("/api/contact", {
              "method": "POST",
              "headers": { "content-type": "application/json" },
              "body": JSON.stringify({
                  name: event.target.name.value,
                  email: event.target.email.value,
                  subject: event.target.subject.value,
                  message: event.target.message.value
              })
            })
          } catch (error) {
              
          }
    }

    return ( 
        <>
            <ToastContainer autoClose={3000} />
            <Head>        
                <link rel="stylesheet" href="css/icomoon.css" />      
                <title>Contact | {process.env.NEXT_PUBLIC_PAGE_TITLE}</title>        
            </Head>
            <section className="ftco-section contact-section">
                <div className="container">
                    <div className="row d-flex mb-5 contact-info">
                    <div className="col-md-12">
                        <h2 className="h4 font-weight-bold">{(locale === 'es-419') ? 'Información de contacto': 'Contact'}</h2>
                    </div>
                    <div className="w-100"></div>
                    
                    </div>
                    <div className="row block-9">
                        <div className="col-md-6 order-md-last pr-md-5">
                            <form onSubmit={handleSubmit} ref={formContactRef}>
                                <div className="form-group">
                                    <input type="text" id="name" name="name" className="form-control" placeholder={(locale === 'es-419') ? 'Tu nombre': 'Your name'} />
                                </div>
                                <div className="form-group">
                                    <input type="text" id="email" name="email" className="form-control" placeholder={(locale === 'es-419') ? 'Tu email': 'Your email'} />
                                </div>
                                <div className="form-group">
                                    <input type="text" id="subject" name="subject" className="form-control" placeholder={(locale === 'es-419') ? 'Asunto': 'Subject'} />
                                </div>
                                <div className="form-group">
                                    <textarea id="message"  name="message" cols="30" rows="7" className="form-control" placeholder={(locale === 'es-419') ? 'Mensaje': 'Message'}></textarea>
                                </div>
                                <div className="form-group">
                                    <input type="submit" value={(locale === 'es-419') ? 'Enviar': 'Send'} className="btn btn-primary py-3 px-5" />
                                </div>
                            </form>
                        </div>
                        <div className="col-md-6">
                            <div>
                                <p><span className="text-secondary">{(locale === 'es-419') ? 'Dirección:': 'Address:'}</span> {personal_data[0].fields.ubicacion}</p>
                            </div>
                            {
                                (personal_data[0].fields.telefono) ? (
                                    <div className="pt-2">
                                        <p><span className="text-secondary">{(locale === 'es-419') ? 'Teléfono:': 'Phone:'}</span> <a href={`tel://${personal_data[0].fields.telefono}`}> {personal_data[0].fields.telefono}</a></p>
                                    </div>
                                ):(
                                    null
                                )
                            }
                            
                            <div className="pt-2">
                                <p><span className="text-secondary">{(locale === 'es-419') ? 'Correo:': 'Email:'}</span> <a href={`mailto:${personal_data[0].fields.correo}`}>{personal_data[0].fields.correo}</a></p>
                            </div>
                            <div className="pt-2">
                                <p><span className="text-secondary">Web: </span> <a href={personal_data[0].fields.web} target="_blank" rel="noreferrer">{personal_data[0].fields.web}</a></p>
                            </div>
                            <div className="row left">
                                <ul className="ftco-social mt-4">
                                    <li><a href={personal_data[0].fields.twitter} target="_blank" rel="noreferrer" ><span className="icon-twitter"></span></a></li>
                                    <li><a href={personal_data[0].fields.facebook} target="_blank" rel="noreferrer"><span className="icon-facebook"></span></a></li>
                                    <li><a href={personal_data[0].fields.linkedin} target="_blank" rel="noreferrer"><span className="icon-linkedin"></span></a></li>
                                    <li><a href={personal_data[0].fields.github} target="_blank" rel="noreferrer"><span className="icon-github"></span></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </section>   
        </>
     );
}
 
export default Contact;