import Head from 'next/head';
import Link from 'next/link';
import { useEffect } from 'react';
import $ from 'jquery';
import { useContext } from 'react';
import ContextApp from '../../context';

const Layout = props => {

    const {locale, setLanguage} = useContext(ContextApp);

    useEffect(() => {
        $(document).click(function (e) {
            var container = $("#colorlib-aside, .js-colorlib-nav-toggle");
            if (!container.is(e.target) && container.has(e.target).length === 0) {
        
                if ( $('body').hasClass('offcanvas') ) {
        
                    $('body').removeClass('offcanvas');
                    $('.js-colorlib-nav-toggle').removeClass('active');
                
                }
                
            }
        });

        if ($('body').hasClass('offcanvas')) {
            document.querySelector("#btnBurger").classList.remove("active");
            $('body').removeClass('offcanvas');	
        }
    }, [locale])
    
    const onClickBurger = () => {
        if ($('body').hasClass('offcanvas')) {
            document.querySelector("#btnBurger").classList.remove("active");
            $('body').removeClass('offcanvas');	
        } else {
            document.querySelector("#btnBurger").classList.add("active");
            $('body').addClass('offcanvas');	
        }
    }

    const onClickLanguage = (lang) => {
        setLanguage(lang);
    }

    return ( 
        <>
            <Head>
                <title>{process.env.NEXT_PUBLIC_PAGE_TITLE}</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="robots" content= "index, follow"/>	
                <meta name="keywords" content="Carlos, Peraza, Carlos Peraza, Ingeniero, Informatica, programacion, web, desarrollo, desarrollo web, scrapping, web scrapping, tecnologia, software " />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000619" />
                <meta name="msapplication-navbutton-color" content="#000619" />
                <meta name="msapplication-window" content="width=1024;height=768" />
                <meta property="og:title" content="carlosperaza.dev" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="carlosperaza.dev" />
                <meta name="description" content="Hola, mi nombre es Carlos Peraza soy ingeniero en informatica y desarrollador de software." />
                <meta property="og:image" itemProp="image" content="https://images.ctfassets.net/gwysva35bpgz/6C7UgbGLtPjyWMkteSBOKU/e291da6083ea2670ac04327c3848a901/perfil.jpg" />
                <meta property="og:description" content="Hola, mi nombre es Carlos Peraza soy ingeniero en informatica y desarrollador de software." />
                <meta name="msapplication-tooltip" content="Hola, mi nombre es Carlos Peraza soy ingeniero en informatica y desarrollador de software." />       
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />
                <link rel="stylesheet" href="css/style.css" />
            </Head>  
            <span onClick={() => onClickBurger()} className="js-colorlib-nav-toggle colorlib-nav-toggle" id="btnBurger"><i></i></span>
            <aside id="colorlib-aside" role="complementary" className="js-fullheight text-center">
            <Link href="/"><h1 id="colorlib-logo" className="cursor-pointer">Carlos</h1></Link> 
            <br/>
                <nav id="colorlib-main-menu" role="navigation">
                    <div className='div-languages cursor-pointer'>
                        {
                            (locale === 'es-419') ? (
                                <div className='img-english' title='Select english language' onClick={() => onClickLanguage("en-US")}></div>
                            ):(
                                <div className='img-spanish' title='Select spanish language' onClick={() => onClickLanguage("es-419")}></div>
                            )
                        }
                    </div>
                    
                    <ul>
                        <li className={(props.children.key==="/" ? "colorlib-active": "")}><Link href="/">Home</Link></li>
                        <li className={(props.children.key==="/skills" ? "colorlib-active": "")}><Link href="/skills">{(locale === 'es-419') ? 'Habilidades': 'Skills'}</Link></li>
                        <li className={(props.children.key==="/experience" ? "colorlib-active": "")}><Link href="/experience">{(locale === 'es-419') ? 'Experiencia': 'Experience'}</Link></li>
                        <li className={(props.children.key==="/education" ? "colorlib-active": "")}><Link href="/education">{(locale === 'es-419') ? 'Educación': 'Education'}</Link></li>
                        <li className={(props.children.key==="/rewards" ? "colorlib-active": "")}><Link href="/rewards">{(locale === 'es-419') ? 'Reconocimientos': 'Rewards'}</Link></li>
                        <li className={(props.children.key==="/contact" ? "colorlib-active": "")}><Link href="/contact">{(locale === 'es-419') ? 'Contacto': 'Contact'}</Link></li>
                    </ul>
                </nav>

                <div className="colorlib-footer">
                    <a href="https://github.com/cperazal" target="_blank" rel="noreferrer">
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                            <div 
                                className="dev-icon center" 
                                style={{backgroundImage: `url(https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg)`}} 
                                title="GitHub">
                            </div>
                        </div>
                    </a>
                    <small>@cperazal</small>
                    <br/>
                    Copyright &copy;{new Date().getFullYear()}
                    
                </div>
            </aside>
            <div id="colorlib-main">
                <main>
                    {props.children}
                </main>
            </div>

        </>
     );
}
 
export default Layout;