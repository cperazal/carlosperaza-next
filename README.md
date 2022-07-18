# Personal Web Next js

Aplicación web sencilla para mostrar portafolio y resumen curricular.

#### Tecnologías

- [Next js](https://nextjs.org/ "Next js")
- [Contentful CMS](https://www.contentful.com "Contentful")
- [Framer Motion](https://www.framer.com/motion/ "Framer motion")
- [SendGrid](https://sendgrid.com/ "SendGrid")

#### Configuración
Se puede adaptar el proyecto para usar cualquier forma de obtener los datos a mostrar, como por ejemplo una API propia. En mi caso para este proyecto usé un **CMS Headless** lo cual me parecio muy interesante y quise probarlo. Pueden saber más al respecto haciendo click [aqui](https://www.genbeta.com/desarrollo/headless-cms-que-que-se-diferencian-tradicionales "").

Si optas por esta ultima opción, entonces lo primero que se debe hacer es crear una cuenta en algun CMS headless, en mi caso use [Contentful](https://www.contentful.com "Contentful"), asi como tambien una cuenta en alguna plataforma de envios de correos, en mi caso [SendGrid](https://sendgrid.com/ "SendGrid"). 

Una vez creadas las cuentas y configuradas se deben obtener las credenciales y finalmente configurar las siguientes variables de entorno dentro del proyecto, ubicadas en **.env.development / .env.production**:

    CONTENTFUL_ID_SPACE= my_contentful_id
	CONTENTFUL_ACCESS_TOKEN= my_contentful_access_token
	SENDGRID_API_KEY= my_sendgrid_api_key

Pueden ver este proyecto en funcionamiento [aqui](https://www.carlosperaza.dev "aqui")

