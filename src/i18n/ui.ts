//establecer los idiomas disponibles
export const languageList = {
  es: 'Español',
  en: 'English',
};

export const labels = {
  es: {
    // Navbar
    'nav.home': 'Inicio',
    'nav.services': 'Servicios',
    'nav.contact': 'Contacto',
    'nav.login': 'Iniciar Sesión',
    // Hero
    'hero.title': 'Gestiona tus proyectos con',
    'hero.title2': 'inteligencia',
    'hero.subtitle':
      'Planium transforma la manera en que gestionas tus proyectos, con herramientas intuitivas y analíticas avanzadas.',
    'hero.button': 'Solicitar demo',
    'hero.button2': 'Conocer más',
    'hero.percentage': '98% de proyectos exitosos',
    // About
    'about.title': '¿Qué es Planium?',
    'about.title2': 'Plataforma de gestión integral',
    'about.subtitle':
      'Planium es una solución completa diseñada para optimizar cada aspecto de la gestión de proyectos. Combina inteligencia artificial con herramientas intuitivas para transformar la forma en que equipos de cualquier tamaño colaboran y alcanzan sus objetivos.',
    'about.item1': 'Eficiencia Mejorada',
    'about.description1':
      'Automatiza tareas rutinarias y optimiza flujos de trabajo.',
    'about.item2': 'Colaboración sin límites',
    'about.description2':
      'Facilita la comunicación entre equipos distribuidos globalmente.',
    'about.item3': 'Analítica Avanzada',
    'about.description3':
      'Obtén insights valiosos sobre el rendimiento de tus proyectos.',
    // Services
    'services.title': 'Características de Planium',
    'services.subtitle':
      'Descubre cómo Planium puede transformar la gestión de tus proyectos con estas funcionalidades clave.',
    'features.title': 'Tableros Kanban Interactivos',
    'features.description':
      'Gestiona tareas con facilidad utilizando tableros visuales personalizables para cada proyecto y equipo.',
    'features.title2': 'Reportes y Analíticas',
    'features.description2':
      'Accede a insights valiosos con reportes personalizados y paneles de control en tiempo real.',
    'features.title3': 'Colaboración en Tiempo Real',
    'features.description3':
      'Trabaja simultáneamente con tu equipo en documentos, tareas y comunicaciones dentro de la plataforma.',
    'features.title4': 'Gestión de Tiempo y Recursos',
    'features.description4':
      'Optimiza la asignación de recursos y realiza un seguimiento preciso del tiempo invertido en cada tarea.',
    'features.button': 'Más información',
    // Contact
    'contact.title': 'Contáctanos',
    'contact.subtitle':
      '¿Tienes preguntas sobre Planium? Estamos aquí para ayudarte. Contáctanos y un miembro de nuestro equipo se pondrá en contacto contigo lo antes posible.',
    'contact.title2': 'Información de Contacto',
    'contact.item1': 'Dirección',
    'contact.address': 'Av. Principal #123, Torre Empresarial, Piso 15',
    'contact.item2': 'Teléfono',
    'contact.phone': '+1 234 567 890',
    'contact.item3': 'Email',
    'contact.email': 'contacto@planium.ai',
    'contact.links': 'Siguenos en',
    // Contact Form
    'form.title': 'Envíanos un mensaje',
    'form.name': 'Nombre completo',
    'form.nameInput': 'Ingresa tu nombre completo',
    'form.email': 'Correo electrónico',
    'form.emailInput': '123frsa@gmail.com',
    'form.subject': 'Asunto',
    'form.subjectInput': 'Ingresa el asunto del mensaje',
    'form.message': 'Mensaje',
    'form.messageInput': '¿En qué podemos ayudarte?',
    'form.privacy': 'Acepto la',
    'form.privacy2': 'política de privacidad',
    'form.privacy3': 'y el tratamiento de mis datos personales.',
    'form.button': 'Enviar mensaje',
    'form.message2': 'Nos pondremos en contacto contigo lo antes posible.',
    // FAQ
    'faq.title': 'Preguntas Frecuentes',
    'faq.subtitle':
      'Encuentra respuestas a las preguntas más comunes sobre Planium y cómo puede ayudar a tu empresa',
    'faq.question1': '¿Qué es Planium y cómo puede ayudar a mi empresa?',
    'faq.answer1':
      'Planium es una plataforma integral de gestión de proyectos que combina herramientas de colaboración, seguimiento de tareas, análisis de datos y gestión de recursos en una sola solución. Ayuda a las empresas a optimizar sus flujos de trabajo, aumentar la productividad y mejorar la comunicación entre equipos, todo ello conduciendo a una entrega de proyectos más eficiente y exitosa.',
    'faq.question2': '¿Cuánto cuesta Planium y qué planes están disponibles?',
    'faq.answer2':
      'Planium ofrece varios planes adaptados a diferentes necesidades y tamaños de empresa:',
    'faq.item1':
      'Plan Básico: Ideal para equipos pequeños o startups, con funcionalidades esenciales.',
    'faq.item2':
      'Plan Profesional: Para empresas medianas con necesidades más avanzadas de gestión de proyectos.',
    'faq.item3':
      'Plan Empresarial: Solución completa para grandes organizaciones con múltiples equipos y proyectos.',
    'faq.answerTwo':
      'Todos nuestros planes incluyen soporte técnico y actualizaciones regulares. Contacta con nuestro equipo de ventas para obtener información detallada sobre precios.',
    'faq.question3': '¿Necesito instalar algún software para usar Planium?',
    'faq.answer3':
      'No, Planium es una solución basada en la nube que funciona directamente desde tu navegador web. No es necesario instalar ningún software adicional en tu dispositivo. Esto significa que puedes acceder a Planium desde cualquier lugar y dispositivo con conexión a internet, lo que facilita el trabajo remoto y la colaboración entre equipos distribuidos geográficamente.',
    'faq.question4': '¿Qué nivel de seguridad ofrece Planium para mis datos?',
    'faq.answer4':
      'En Planium, la seguridad de tus datos es nuestra máxima prioridad. Implementamos múltiples capas de protección:',
    'faq.item4': 'Encriptación de datos de extremo a extremo.',
    'faq.item5': 'Autenticación de dos factores.',
    'faq.item6': 'Copias de seguridad automáticas y redundancia de datos.',
    'faq.item7': 'Monitorización continua de seguridad.',
    'faq.item8':
      'Cumplimiento con estándares internacionales como ISO 27001 y GDPR.',
    'faq.question5':
      '¿Puedo integrar Planium con otras herramientas que ya utilizo?',
    'faq.answer5':
      'Sí, Planium ofrece amplias capacidades de integración con herramientas populares como:',
    'faq.item9': 'Google Workspace y Microsoft 365',
    'faq.item10': 'Slack, Microsoft Teams y otras herramientas de comunicación',
    'faq.item11': 'Sistemas CRM como Salesforce',
    'faq.item12': 'Herramientas de desarrollo como GitHub, GitLab y Jira',
    'faq.item13': 'Software de contabilidad y facturación',
    'faq.answer6':
      'Además, Planium dispone de una API abierta que permite desarrollar integraciones personalizadas para necesidades específicas.',
    // Footer
    'footer.quickLinks': 'Enlaces rápidos',
    'footer.home': 'Inicio',
    'footer.about': 'Sobre Planium',
    'footer.services': 'Servicios',
    'footer.contact': 'Contacto',
    'footer.faq': 'Preguntas frecuentes',
    'footer.privacyPolicy': 'Política de Privacidad',
    'footer.contactUs': 'Contáctanos',
    'footer.address': 'Av. Principal #123, Torre Empresarial, Piso 15',
    'footer.phone': '+1 234 567 890',
    'footer.email': 'contacto@planium.ai',
    'footer.madeWith': 'Hecho con amor ❤️ Medusa Lab.',
    'footer.copyright': 'Todos los derechos reservados.',
    // Privacy Policy Page
    'privacyPolicy.title': 'Política de Privacidad',
    'privacyPolicy.subtitle': 'Última actualización: 17 de febrero de 2025',
    'privacyPolicy.indice': 'Índice',
    'privacyPolicy.item1': 'Introducción',
    'privacyPolicy.item2': 'Información que Recopilamos',
    'privacyPolicy.item3': 'Uso de la Información',
    'privacyPolicy.item4': 'Divulgación de Información a Terceros',
    'privacyPolicy.item5': 'Seguridad de la Información',
    'privacyPolicy.item6': 'Derechos del Usuario',
    'privacyPolicy.item7': 'Retención de Datos',
    'privacyPolicy.item8': 'Cookies y Tecnologías Similares',
    'privacyPolicy.item9': 'Privacidad del Usuario en la Aplicación Móvil',
    'privacyPolicy.item10': 'Cambios a esta Política de Privacidad',
    'privacyPolicy.item11': 'Contacto',
    'privacyPolicy.description1':
      'En Planium.AI ("nosotros", "nuestro" o "la Empresa") estamos comprometidos a proteger su privacidad y a garantizar la seguridad de su información personal. La presente Política de Privacidad explica cómo recopilamos, utilizamos, divulgamos y protegemos la información de los usuarios que interactúan con nuestro sitio web y nuestra aplicación móvil (en adelante, "Servicios"). Al utilizar nuestros Servicios, usted acepta las prácticas descritas en esta política.',
    'privacyPolicy.itemA': 'a) Información Personal',
    'privacyPolicy.itemA1':
      'Recopilamos información de carácter personal que usted nosproporciona al:',
    'privacyPolicy.itemA2':
      'Crear una cuenta (nombre, correo electrónico, número de teléfono, etc.).',
    'privacyPolicy.itemA3':
      'Configurar sus proyectos, tareas, personal y costos.',
    'privacyPolicy.itemB': 'b) Información de Uso',
    'privacyPolicy.itemB1':
      'Recopilamos datos sobre la forma en que utiliza nuestros Servicios, tales como:',
    'privacyPolicy.itemB2':
      'Dirección IP, tipo de dispositivo, sistema operativo y datos de navegación.',
    'privacyPolicy.itemB3':
      'Información generada a partir del uso de cookies y tecnologías similares.',
    'privacyPolicy.itemC': 'c) Información de la App',
    'privacyPolicy.itemC1':
      'Cuando utiliza nuestra aplicación móvil, recopilamos:',
    'privacyPolicy.itemC2':
      'Datos necesarios para el correcto funcionamiento y personalización de la experiencia.',
    'privacyPolicy.itemC3':
      'Información que permita la optimización y mejora continua de la app.',
    'privacyPolicy.description2': 'Utilizamos la información recopilada para:',
    'privacyPolicy.Li1': 'Gestiona su cuenta:',
    'privacyPolicy.itemLi1':
      'Permitir el acceso y la administración de sus proyectos y tareas.',
    'privacyPolicy.Li2': 'Personalizar la experiencia:',
    'privacyPolicy.itemLi2':
      'Adaptar el contenido y funcionalidades según sus necesidades.',
    'privacyPolicy.Li3': 'Notificaciones y actualizaciones:',
    'privacyPolicy.itemLi3':
      'Informarle sobre novedades, cambios en el servicio y actualizaciones de seguridad.',
    'privacyPolicy.Li4': 'Análisis y mejoras:',
    'privacyPolicy.itemLi4':
      'Estudiar el uso de nuestros Servicios para optimizarlos y desarrollar nuevas funcionalidades.',
    'privacyPolicy.Li5': 'Cumplir obligaciones legales:',
    'privacyPolicy.itemLi5':
      'Asegurar el cumplimiento de normativas aplicables y proteger nuestros derechos.',
    'privacyPolicy.description4':
      'No vendemos ni alquilamos su información personal. Sin embargo, podemos compartir sus datos en los siguientes casos:',
    'privacyPolicy.Li6': 'Proveedores de Servicios:',
    'privacyPolicy.itemLi6':
      'Con empresas que nos asisten en la operación de nuestros Servicios, bajo estrictos acuerdos de confidencialidad.',
    'privacyPolicy.Li7': 'Cumplimiento Legal:',
    'privacyPolicy.itemLi7':
      'Cuando la ley lo requiera o para proteger nuestros derechos, propiedad o seguridad.',
    'privacyPolicy.Li8': 'Transferencias Comerciales:',
    'privacyPolicy.itemLi8':
      'En procesos de fusión, adquisición o venta de activos, siempre garantizando la continuidad de la protección de sus datos.',
    'privacyPolicy.description5':
      'Implementamos medidas técnicas y organizativas adecuadas para proteger su información contra acceso no autorizado, pérdida o divulgación. No obstante, ningún sistema de seguridad es infalible y, por ello, no podemos garantizar la seguridad absoluta de los datos transmitidos a través de Internet.',
    'privacyPolicy.Li9': 'Derechos del Usuario:',
    'privacyPolicy.itemLi9': 'Usted tiene derecho a:',
    'privacyPolicy.itemLi9_1':
      'Acceder a la información personal que tenemos sobre usted.',
    'privacyPolicy.itemLi9_2': 'Rectificar datos inexactos o incompletos.',
    'privacyPolicy.itemLi9_3':
      'Solicitar la eliminación de sus datos, cuando ya no sean necesarios para los fines establecidos.',
    'privacyPolicy.itemLi9_4':
      'Restringir u oponerse al tratamiento de sus datos.',
    'privacyPolicy.itemLi9_5':
      'Retirar su consentimiento en cualquier momento, sin afectar la legalidad del procesamiento basado en el consentimiento previo.',
    'privacyPolicy.derecho':
      'Para ejercer estos derechos, por favor contáctenos a:',
    'privacyPolicy.itemDerecho': 'contacto@planium.ai',
    'privacyPolicy.description7':
      'Conservamos su información personal únicamente durante el tiempo necesario para cumplir con los fines para los cuales fue recopilada y para cumplir con las obligaciones legales correspondientes.',
    'privacyPolicy.cookies': 'Utilizamos cookies y tecnologías similares para:',
    'privacyPolicy.itemCookies1':
      'Mejorar la experiencia de navegación en nuestro sitio web y aplicación.',
    'privacyPolicy.itemCookies2': 'Analizar tendencias y administrar el sitio.',
    'privacyPolicy.itemCookies3': 'Recordar sus preferencias.',
    'privacyPolicy.itemCookies4':
      'Usted puede configurar su navegador para rechazar cookies; sin embargo, esto podría afectar el funcionamiento óptimo de algunos Servicios.',
    'privacy.mobile':
      'La información ingresada y procesada a través de nuestra aplicación se gestiona de acuerdo con esta Política de Privacidad. Nos comprometemos a:',
    'privacyPolicy.itemMobile1':
      'No vender, compartir o divulgar sus datos personales a terceros sin su consentimiento, salvo en los casos establecidos en esta política.',
    'privacyPolicy.itemMobile2':
      'Garantizar la seguridad y confidencialidad de la información mediante protocolos adecuados.',
    'privacyPolicy.changes':
      'Podemos actualizar esta Política de Privacidad periódicamente. Cuando realicemos cambios significativos, le notificaremos mediante un aviso destacado en nuestro sitio web o a través de su correo electrónico. Le recomendamos revisar esta política de forma regular para estar al tanto de cualquier modificación.',
    'privacyPolicy.contact':
      'Si tiene alguna pregunta, comentario o solicitud respecto a esta Política de Privacidad, no dude en comunicarse con nosotros a través de:',
    'privacyPolicy.itemContact1': 'Correo electrónico',
    'privacyPolicy.itemContact2': 'contacto@planium.ai',
    'privacyPolicy.itemContact3': 'LinkedIn',
    'privacyPolicy.itemContact4':
      'https://www.linkedin.com/company/planium.ai/',
  },
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    'nav.login': 'Login',
    // Hero
    'hero.title': 'Manage your projects with',
    'hero.title2': 'intelligence',
    'hero.subtitle':
      'Planium transforms the way you manage your projects, with intuitive and advanced analytical tools.',
    'hero.button': 'Request a demo',
    'hero.button2': 'Learn more',
    'hero.percentage': '98% of successful projects',
    // About
    'about.title': 'What is Planium?',
    'about.title2': 'Integrated Management Platform',
    'about.subtitle':
      'Planium is a complete solution designed to optimize each aspect of project management. Combine artificial intelligence with intuitive tools to transform the way teams of any size collaborate and achieve their goals.',
    'about.item1': 'Efficiency Improved',
    'about.description1': 'Automate routine tasks and optimize workflow.',
    'about.item2': 'Collaboration Unlimited',
    'about.description2':
      'Facilitate communication between distributed teams globally.',
    'about.item3': 'Advanced Analytics',
    'about.description3':
      'Gain valuable insights about the performance of your projects.',
    // Services
    'services.title': 'Planium Features',
    'services.subtitle':
      'Discover how Planium can transform the management of your projects with these key features.',
    'features.title': 'Interactive Kanban Boards',
    'features.description':
      'Manage tasks easily using customizable visual boards for each project and team.',
    'features.title2': 'Customizable Reports and Analytics',
    'features.description2':
      'Access valuable insights with customized reports and real-time control panels.',
    'features.title3': 'Real-time Collaboration',
    'features.description3':
      'Work collaboratively with your team in documents, tasks, and communications within the platform.',
    'features.title4': 'Time and Resource Management',
    'features.description4':
      'Optimize resource assignment and track precise time spent on each task.',
    'features.button': 'Learn More',
    // Contact
    'contact.title': 'Contact Us',
    'contact.subtitle':
      'Have questions about Planium? We are here to help you. Contact us and a member of our team will reach out to you as soon as possible.',
    'contact.title2': 'Contact Information',
    'contact.item1': 'Address',
    'contact.address': 'Av. Principal #123, Torre Empresarial, Piso 15',
    'contact.item2': 'Phone',
    'contact.phone': '+1 234 567 890',
    'contact.item3': 'Email',
    'contact.email': 'contacto@planium.ai',
    'contact.links': 'Follow Us On',
    // Contact Form
    'form.title': 'Send Us a Message',
    'form.name': 'Full Name',
    'form.nameInput': 'Enter your full name',
    'form.email': 'Email',
    'form.emailInput': '123frsa@gmail.com',
    'form.subject': 'Subject',
    'form.subjectInput': 'Enter the subject of your message',
    'form.message': 'Message',
    'form.messageInput': 'What can we help you with?',
    'form.privacy': 'I agree to the',
    'form.privacy2': 'Privacy Policy',
    'form.privacy3': 'and the treatment of my personal data.',
    'form.button': 'Send Message',
    'form.message2': 'We will get in touch with you as soon as possible.',
    // FAQ
    'faq.title': 'Frequently Asked Questions',
    'faq.subtitle':
      'Find answers to the most common questions about Planium and how you can help your company',
    'faq.question1': 'What is Planium and how can I help my company?',
    'faq.answer1':
      'Planium is an integrated project management platform that combines collaboration tools, task tracking, data analysis, and resource management in a single solution. It helps companies optimize their workflow, increase productivity, and improve communication between teams, all while delivering successful projects.',
    'faq.question2': 'How much does Planium cost and what plans are available?',
    'faq.answer2':
      'Planium offers a variety of plans tailored to different needs and company sizes:',
    'faq.item1':
      'Basic Plan: Ideal for small or startup teams with essential features.',
    'faq.item2':
      'Professional Plan: For medium-sized companies with advanced project management needs.',
    'faq.item3':
      'Enterprise Plan: Full solution for large organizations with multiple teams and projects.',
    'faq.answerTwo':
      'All our plans include technical support and regular updates. Contact our sales team for detailed pricing information.',
    'faq.question3': 'Do I need to install any software to use Planium?',
    'faq.answer3':
      'No, Planium is a cloud-based solution that works directly from your web browser. You dont need to install any additional software on your device. This means you can access Planium from any location and device with internet connectivity, making remote work and collaboration between distributed teams geographically possible. You can also use Planium without an internet connection, but you will not be able to access your data from other devices.',
    'faq.question4': 'What level of security does Planium offer for my data?',
    'faq.answer4':
      'In Planium, your data is our top priority. We implement multiple layers of protection:',
    'faq.item4': 'End-to-end data encryption.',
    'faq.item5': 'Two-factor authentication.',
    'faq.item6': 'Automatic backups and redundancy of data.',
    'faq.item7': 'Continuous security monitoring.',
    'faq.item8':
      'Compliance with international standards such as ISO 27001 and GDPR.',
    'faq.question5': 'Can I integrate Planium with other tools I already use?',
    'faq.answer5':
      'Yes, Planium offers a wide range of integrations with popular tools like:',
    'faq.item9': 'Google Workspace and Microsoft 365',
    'faq.item10': 'Slack, Microsoft Teams, and other communication tools',
    'faq.item11': 'CRM systems like Salesforce',
    'faq.item12': 'Development tools like GitHub, GitLab, and Jira',
    'faq.item13': 'Accounting and invoicing software',
    'faq.answer6':
      'In addition, Planium offers an open API that allows you to build custom integrations for specific needs.',
    // Footer
    'footer.quickLinks': 'Quick Links',
    'footer.home': 'Home',
    'footer.about': 'About Planium',
    'footer.services': 'Services',
    'footer.contact': 'Contact',
    'footer.faq': 'Frequently Asked Questions',
    'footer.privacyPolicy': 'Privacy Policy',
    'footer.contactUs': 'Contact Us',
    'footer.address': 'Av. Principal #123, Torre Empresarial, Piso 15',
    'footer.phone': '+1 234 567 890',
    'footer.email': 'contacto@planium.ai',
    'footer.madeWith': 'Made with love ❤️ Medusa Lab.',
    'footer.copyright': 'All rights reserved.',
    // Privacy Policy Page
    'privacyPolicy.title': 'Privacy Policy',
    'privacyPolicy.subtitle': 'Last updated: 17 February 2025',
    'privacyPolicy.indice': 'Index',
    'privacyPolicy.item1': 'Introduction',
    'privacyPolicy.item2': 'Information We Collect',
    'privacyPolicy.item3': 'Use of Information',
    'privacyPolicy.item4': 'Divulgation of Information',
    'privacyPolicy.item5': 'Security of Information',
    'privacyPolicy.item6': 'Liability for Our Services',
    'privacyPolicy.item7': 'Retention of Information',
    'privacyPolicy.item8': 'Cookies and Similar Technologies',
    'privacyPolicy.item9': 'Privacy of Users in Mobile Apps',
    'privacyPolicy.item10': 'Changes to this Privacy Policy',
    'privacyPolicy.item11': 'Contact Us',
    'privacyPolicy.description1':
      'In Planium.AI ("us", "our" or "the Company") we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and protect your information when you interact with our website and mobile application (hereinafter referred to as "Services"). By using our Services, you agree to the practices described in this policy.',
    'privacyPolicy.itemA': 'a) Personal Information',
    'privacyPolicy.itemA1':
      'We collect personal information that you provide to us in the following ways:',
    'privacyPolicy.itemA2':
      'Create an account (name, email address, phone number, etc.).',
    'privacyPolicy.itemA3':
      'Configure your projects, tasks, personal and costs.',
    'privacyPolicy.itemB': 'b) Use of Information',
    'privacyPolicy.itemB1':
      'We collect information about the way you use our Services, such as:',
    'privacyPolicy.itemB2':
      'Address, device type, operating system, and navigation data.',
    'privacyPolicy.itemB3':
      'Information generated from the use of cookies and similar technologies.',
    'privacyPolicy.itemC': 'c) App Information',
    'privacyPolicy.itemC1': 'When you use our mobile application, we collect:',
    'privacyPolicy.itemC2':
      'Necessary data for the correct functioning and customization of the experience.',
    'privacyPolicy.itemC3':
      'Information that allows for continuous optimization and improvement of the app.',
    'privacyPolicy.description2':
      'We use the information we collect for the following purposes:',
    'privacyPolicy.Li1': 'Manage your account:',
    'privacyPolicy.itemLi1':
      'Allow access and management of your projects and tasks.',
    'privacyPolicy.Li2': 'Customize the experience:',
    'privacyPolicy.itemLi2': 'Adapt content and features to your needs.',
    'privacyPolicy.Li3': 'Notifications and updates:',
    'privacyPolicy.itemLi3':
      'Inform you about news, changes in service, and security updates.',
    'privacyPolicy.Li4': 'Analysis and improvements:',
    'privacyPolicy.itemLi4':
      'Study the use of our Services to optimize them and develop new features.',
    'privacyPolicy.Li5': 'Compliance with legal obligations:',
    'privacyPolicy.itemLi5':
      'Ensure compliance with applicable laws and protect your rights.',
    'privacyPolicy.description4':
      'We do not sell or rent your personal information. However, we can share your data in the following cases:',
    'privacyPolicy.Li6': 'Service Providers:',
    'privacyPolicy.itemLi6':
      'With companies that we work with on our Services, under strict confidentiality agreements.',
    'privacyPolicy.Li7': 'Compliance with Legal Obligations:',
    'privacyPolicy.itemLi7':
      'When the law requires it or to protect our rights, property, or safety.',
    'privacyPolicy.Li8': 'Commercial Transfers:',
    'privacyPolicy.itemLi8':
      'In mergers, acquisitions, or sales of assets, always ensuring the continuity of the protection of your data.',
    'privacyPolicy.description5':
      'We implement technical and organizational measures appropriate to protect your information against unauthorized access, loss, or disclosure. However, no security system is infallible, and so we cannot guarantee the absolute security of the data transmitted through the Internet.',
    'privacyPolicy.Li9': 'User Rights:',
    'privacyPolicy.itemLi9': 'You have the right to:',
    'privacyPolicy.itemLi9_1':
      'Access to the personal information we have about you.',
    'privacyPolicy.itemLi9_2':
      'Correct, amend, or delete your data that is inaccurate or incomplete.',
    'privacyPolicy.itemLi9_3':
      'Request the deletion of your data when it is no longer necessary for the purposes established.',
    'privacyPolicy.itemLi9_4':
      'Restrict or object to the treatment of your data.',
    'privacyPolicy.itemLi9_5':
      'Withdraw your consent at any time, without affecting the legality of the processing based on consent prior.',
    'privacyPolicy.derecho': 'To exercise these rights, please contact us at:',
    'privacyPolicy.itemDerecho': 'contacto@planium.ai',
    'privacyPolicy.description7':
      'We retain your personal information only for the time necessary to comply with the purposes for which it was collected and to comply with the legal obligations corresponding to them.',
    'privacyPolicy.cookies': 'We use cookies and similar technologies to:',
    'privacyPolicy.itemCookies1':
      'Improve the navigation experience on our website and mobile application.',
    'privacyPolicy.itemCookies2': 'Analyze trends and manage the site.',
    'privacyPolicy.itemCookies3': 'Remember your preferences.',
    'privacyPolicy.itemCookies4':
      'You can configure your browser to reject cookies; however, this may affect the optimal functioning of some Services.',
    'privacy.mobile':
      'The information you enter and process through our mobile application is managed in accordance with this Privacy Policy. We commit to:',
    'privacyPolicy.itemMobile1':
      'Not sell, share, or divulge your personal data to third parties without your consent, unless otherwise set forth in this policy.',
    'privacyPolicy.itemMobile2':
      'Ensure the security and confidentiality of the information through appropriate protocols.',
    'privacyPolicy.changes':
      'We may update this Privacy Policy periodically. When we make significant changes, we will notify you through a prominent notice on our website or through your email. We recommend reviewing this policy regularly to stay up to date on any changes.',
    'privacyPolicy.contact':
      'If you have any questions, comments, or requests regarding this Privacy Policy, please do not hesitate to contact us through:',
    'privacyPolicy.itemContact1': 'Email',
    'privacyPolicy.itemContact2': 'contacto@planium.ai',
    'privacyPolicy.itemContact3': 'LinkedIn',
    'privacyPolicy.itemContact4':
      'https://www.linkedin.com/company/planium.ai/',
  },
};
