export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  years: string;

  client: string;
  role: string;
  duration: string;
  timeline: string;
  deliverables: string;
  category: string;

  overviewParagraphs: string[];
  challenges: string[];
  solutionParagraphs: string[];
  resultsParagraphs: string[];
  galleryImages: {
    src: string;
    alt: string;
  }[];
}

export const projects: Project[] = [
  {
    id: "visidea",
    slug: "visidea",
    title: "Visidea",
    description:
      "A web-based platform developed for Visidea, an event organizer company by Marketing AWH, designed to showcase company profiles and provide a digital platform for vendors, partners, and potential clients to submit proposals or connect with the Visidea team.",
    image: "/img/visidea.png",
    tags: [
      "Angular.js",
      "TypeScript",
      "Tailwind CSS",
      "REST API",
      "CMS Integration",
    ],
    years: "2025",

    client: "Visidea by Marketing AWH",
    role: "Frontend Developer",
    duration: "Project Development",
    timeline: "August - December 2025",
    deliverables:
      "Responsive company profile website, proposal submission platform, CMS integration, and API integration",
    category: "Event Organizer Platform",

    overviewParagraphs: [
      "Visidea is a digital platform created for an event organizer company under Marketing AWH. The platform serves as a company profile website that introduces Visidea's services, portfolio, and event experiences.",
      "The application provides a communication channel for vendors, partners, and potential clients who want to collaborate with Visidea by submitting proposals or contacting the internal team.",
      "Visidea has organized various events such as graduation ceremonies, weddings, running events, and other corporate or private events.",
    ],

    challenges: [
      "Creating a modern and responsive company profile platform that represents Visidea's brand identity.",
      "Building an easy-to-use proposal submission flow for vendors and potential partners.",
      "Integrating frontend applications with backend APIs and CMS systems to manage dynamic content.",
      "Ensuring consistent UI performance across multiple devices.",
    ],

    solutionParagraphs: [
      "Developed the frontend application using Angular.js with TypeScript to create a structured and maintainable web application.",
      "Implemented Tailwind CSS to build a responsive, modern, and pixel-perfect user interface.",
      "Integrated REST API services and CMS functionality to allow dynamic content management for Visidea's team.",
      "Optimized the application structure and components to improve maintainability and user experience.",
    ],

    resultsParagraphs: [
      "Delivered a professional event organizer platform that helps Visidea present their services and previous event portfolios.",
      "Enabled vendors and potential clients to easily submit collaboration proposals and communicate with the Visidea team.",
      "Provided a scalable frontend architecture integrated with API and CMS systems.",
    ],

    galleryImages: [
      { src: "/img/visidea1.png", alt: "Visidea Home Page" },
      { src: "/img/visidea2.png", alt: "Visidea Home Page" },
      { src: "/img/visidea3.png", alt: "Visidea Home Page" },
    ],
  },
  {
    id: "photobooth",
    slug: "photobooth",
    title: "AWH Photobooth",
    description:
      "A product landing page developed for AWH Photobooth, a digital platform that introduces AWH's photobooth services, location points, rental packages, and collaboration opportunities for businesses and event organizers.",
    image: "/img/photobooth.png",
    tags: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "REST API",
      "CMS Integration",
      "Responsive Design",
    ],
    years: "2024",

    client: "AWH Photobooth",
    role: "Frontend Developer",
    duration: "Product Landing Page Development",
    timeline: "February 2024 - January 2026",
    deliverables:
      "Responsive landing page, product showcase, photobooth location information, collaboration form, API and CMS integration",
    category: "Product Landing Page",

    overviewParagraphs: [
      "AWH Photobooth is one of AWH's featured products that provides interactive photobooth solutions for events, business locations, and public spaces.",
      "The product is part of the Visidea ecosystem but can also operate independently by placing photobooth points in various locations such as tourist attractions, cafes, and other public areas.",
      "The landing page was developed to introduce the photobooth product, showcase available installation locations, and provide an easy way for potential partners to start a collaboration.",
    ],

    challenges: [
      "Creating an attractive product landing page that represents the photobooth experience and AWH branding.",
      "Presenting multiple photobooth location points clearly for users and potential partners.",
      "Building a digital marketing platform that supports product promotion and business collaboration.",
      "Integrating dynamic content management through CMS and API services.",
    ],

    solutionParagraphs: [
      "Developed a responsive landing page using React.js with TypeScript to create a scalable and maintainable frontend structure.",
      "Implemented Tailwind CSS to build a modern, responsive, and pixel-perfect user interface across desktop and mobile devices.",
      "Integrated API and CMS systems to manage product information, location data, and promotional content dynamically.",
      "Created user-friendly sections for product introduction, partnership offers, maintenance services, and collaboration requests.",
    ],

    resultsParagraphs: [
      "Delivered a digital product platform that helps AWH promote and introduce their photobooth solutions to wider audiences.",
      "Enabled potential partners to discover photobooth installation opportunities and request collaboration easily.",
      "Provided a flexible marketing platform that supports both Visidea bundle integration and standalone photobooth business operations.",
    ],

    galleryImages: [
      {
        src: "/img/photobooth1.png",
        alt: "AWH Photobooth Home Page",
      },
      {
        src: "/img/photobooth2.png",
        alt: "AWH Photobooth Home Page",
      },
    ],
  },
  {
    id: "imomen",
    slug: "imomen",
    title: "Imomen Digital Invitation",
    description:
      "A self-service digital invitation platform that allows users to create, customize, and manage their own event invitations with various available themes, guest management, and QR-based attendance tracking features.",
    image: "/img/imomen1.png",
    tags: [
      "Next.js",
      "Express.js",
      "PostgreSQL",
      "Tailwind CSS",
      "REST API",
      "Full-Stack",
      "Self Service System",
    ],
    years: "2026",

    client: "Imomen Digital Invitation",
    role: "Full-Stack Developer",
    duration: "Platform Development",
    timeline: "April - June 2026",
    deliverables:
      "Self-service invitation builder, theme customization system, guest management, QR attendance system, API development, and database management",
    category: "Digital Invitation Platform",

    overviewParagraphs: [
      "Imomen is a digital invitation platform that allows users to create and manage their own event invitations independently through a self-service system.",
      "Users can choose from various available invitation themes and customize their event information through predefined forms based on each selected theme.",
      "The platform is designed for various events such as weddings, birthdays, and other celebrations with complete guest management features.",
    ],

    challenges: [
      "Building a flexible invitation system that supports multiple themes with different layouts and content structures.",
      "Creating a self-service workflow where users can easily create, edit, and manage their own invitations.",
      "Developing a guest management system with QR-based attendance tracking.",
      "Designing a scalable backend architecture to handle invitation data, users, guests, and event information.",
    ],

    solutionParagraphs: [
      "Developed the frontend application using Next.js to create a fast, scalable, and SEO-friendly web application.",
      "Built backend services using Express.js with REST API architecture to manage application logic and data communication.",
      "Implemented PostgreSQL as the database solution for storing users, invitation data, themes, guests, and attendance records.",
      "Created a dynamic theme-based invitation system where users can select templates and customize content based on the chosen design.",
      "Developed guest management features including adding guests, sending invitation links, editing invitation messages, and tracking attendance through QR scanning.",
    ],

    resultsParagraphs: [
      "Delivered a complete digital invitation platform that enables users to create and manage invitations without technical knowledge.",
      "Provided an efficient guest management system that helps event owners monitor attendance in real-time through QR-based check-ins.",
      "Built a scalable full-stack application with a modern frontend architecture and structured backend services.",
    ],

    galleryImages: [
      {
        src: "/img/imomen1.png",
        alt: "Imomen Digital Invitation Home Page",
      },
      {
        src: "/img/imomen2.png",
        alt: "Imomen Self Service Editor Page",
      },
      {
        src: "/img/imomen3.png",
        alt: "Imomen Guest Management Page",
      },
      {
        src: "/img/imomen4.png",
        alt: "Imomen Guest Management Page",
      },
      {
        src: "/img/imomen5.png",
        alt: "Imomen Guest Management Page",
      },
      {
        src: "/img/imomen6.png",
        alt: "Imomen Guest Management Page",
      },
    ],
  },
  {
    id: "kse",
    slug: "kse",
    title: "KSE Organization Profile",
    description:
      "A modern web profile platform developed for KSE organization with integrated donation and campaign management features. The platform helps users understand KSE's mission, activities, and participate in donation programs.",
    image: "/img/kse.png",
    tags: [
      "PHP Laravel",
      "MySQL",
      "Bootstrap 4",
      "CMS",
      "Full-Stack",
      "Admin Dashboard",
    ],
    years: "2023",

    client: "KSE Organization",
    role: "Full-Stack Developer",
    duration: "Website Development & CMS Implementation",
    timeline: "July - October 2023",
    deliverables:
      "Modern organization profile website, donation campaign system, CMS dashboard, and content management features",
    category: "Organization Profile Platform",

    overviewParagraphs: [
      "KSE is an organization that needed a modern digital presence to introduce their mission, programs, and activities to a wider audience.",
      "The existing website was outdated and required improvements in terms of design, usability, and content management capabilities.",
      "This platform was developed to provide an updated organization profile website with an integrated donation system for various campaigns and activities.",
    ],

    challenges: [
      "Modernizing an existing organization website with a more attractive and user-friendly interface.",
      "Creating a content management system that allows administrators to manage website data independently.",
      "Developing a donation campaign feature to help users discover and participate in ongoing programs.",
      "Building a maintainable full-stack application with structured backend architecture.",
    ],

    solutionParagraphs: [
      "Developed the frontend and backend application using PHP Laravel with Bootstrap 4 to create a responsive and maintainable web platform.",
      "Implemented CMS functionality that allows administrators to manage website content such as information pages, activities, campaigns, and other dynamic data.",
      "Built donation campaign features that allow visitors to view available programs and understand how to contribute.",
      "Designed and developed the database structure using MySQL to manage organization data, content, and donation-related information.",
    ],

    resultsParagraphs: [
      "Delivered a modern organization profile website that improves KSE's online presence and user experience.",
      "Enabled KSE administrators to update and manage website content without developer assistance through the CMS dashboard.",
      "Provided a digital platform that makes it easier for users to learn about KSE programs and participate in donation activities.",
    ],

    galleryImages: [
      {
        src: "/img/kse1.png",
        alt: "KSE Organization Home Page",
      },
      { src: "/img/kse2.png", alt: "KSE Campaign Page" },
    ],
  },
  {
    id: "smart-ticketing",
    slug: "smart-ticketing",
    title: "AWH Smart Ticketing",
    description:
      "A web-based ticketing platform developed by AWH to manage digital ticket sales for events such as concerts and running events with quota management, ticket purchasing flow, and real-time transaction updates.",
    image: "/img/smart-ticketing.png",
    tags: [
      "Laravel",
      "Tailwind CSS",
      "JavaScript",
      "AJAX",
      "REST API",
      "MQTT",
      "Real-time System",
    ],
    years: "2025",

    client: "AWH Smart Ticketing",
    role: "Frontend Developer",
    duration: "Product Development",
    timeline: "September - December 2025",
    deliverables:
      "Ticket purchasing interface, quota management display, event ticket system, API integration, and real-time transaction updates",
    category: "Event Ticketing Platform",

    overviewParagraphs: [
      "AWH Smart Ticketing is a digital ticketing platform developed to support event organizers in managing online ticket sales.",
      "The platform was initially created based on client requirements for a concert ticket purchasing system with limited ticket availability and quota management.",
      "After successful implementation, the system evolved into an AWH product that can be used for various events such as concerts, running events, and other large-scale activities.",
    ],

    challenges: [
      "Building a ticket purchasing flow that supports limited ticket availability and prevents quota conflicts.",
      "Creating a responsive and user-friendly interface for different types of event audiences.",
      "Handling dynamic data updates and real-time transaction information.",
      "Integrating frontend applications with backend services and external APIs.",
    ],

    solutionParagraphs: [
      "Developed the frontend interface using Laravel Blade, Tailwind CSS, and JavaScript to create a responsive and modern ticketing experience.",
      "Implemented AJAX-based interactions to provide smoother user actions without requiring full page reloads.",
      "Integrated REST API services for communication between frontend components and backend systems.",
      "Utilized MQTT technology to support real-time communication and transaction updates within the application.",
      "Built reusable UI components and optimized the interface for desktop and mobile devices.",
    ],

    resultsParagraphs: [
      "Delivered a scalable ticketing platform that supports multiple event categories including concerts and running events.",
      "Provided event organizers with a digital solution for managing ticket sales and availability.",
      "Improved user experience through responsive design and real-time ticketing information.",
    ],

    galleryImages: [
      {
        src: "/img/smart1.png",
        alt: "AWH Smart Ticketing Home Page",
      },
    ],
  },
  {
    id: "parking-system",
    slug: "parking-system",
    title: "AWH Parking Management System",
    description:
      "A web-based parking management system developed by AWH to manage vehicle entry, exit, and parking records with structured data management for operational needs.",
    image: "/img/parking.png",
    tags: [
      "Angular.js",
      "TypeScript",
      "Tailwind CSS",
      "REST API",
      "Frontend Development",
      "Management System",
    ],
    years: "2025",

    client: "AWH Parking System",
    role: "Frontend Developer",
    duration: "Product Development",
    timeline: "July 2025 - January 2026",
    deliverables:
      "Parking management interface, operator dashboard, vehicle tracking UI, API integration, and responsive web application",
    category: "Parking Management System",

    overviewParagraphs: [
      "AWH Parking System is a digital parking management platform developed based on client requirements to improve parking operations and record management.",
      "The system was created to help parking operators manage vehicle entry and exit processes with complete and structured parking data records.",
      "This platform became one of AWH's products that can be adapted for different parking management needs.",
    ],

    challenges: [
      "Creating an intuitive interface for parking operators to manage daily vehicle operations.",
      "Displaying parking data and transaction records in an organized and easy-to-understand format.",
      "Building a responsive system that can be used efficiently in operational environments.",
      "Integrating frontend applications with backend services through REST API.",
    ],

    solutionParagraphs: [
      "Developed the frontend application using Angular.js with TypeScript to create a structured and maintainable web application.",
      "Implemented Tailwind CSS to build a responsive and modern user interface for parking operators.",
      "Integrated REST API services to handle communication between frontend components and backend systems.",
      "Created user interfaces for parking operations including vehicle entry, exit, monitoring, and parking record management.",
    ],

    resultsParagraphs: [
      "Delivered a digital parking management solution that helps operators record and monitor parking activities more efficiently.",
      "Provided a scalable product that can be customized for different client parking environments.",
      "Improved operational workflow through a modern web-based interface and centralized parking data management.",
    ],

    galleryImages: [
      {
        src: "/img/parking1.png",
        alt: "AWH Parking Management Home Page",
      },
      {
        src: "/img/parking2.png",
        alt: "AWH Parking Management Home Page",
      },
    ],
  },
  {
    id: "icketing-system",
    slug: "ticketing-system",
    title: "AWH Ticketing System",
    description:
      "A web-based ticketing management system developed by AWH to manage tourism ticket sales, visitor access control, QR-based wristbands, and visitor service management.",
    image: "/img/ticketing.png",
    tags: [
      "CodeIgniter",
      "PHP",
      "Bootstrap 4",
      "JavaScript",
      "AJAX",
      "Ticket Management System",
    ],
    years: "2024",

    client: "AWH Ticketing System",
    role: "Frontend Developer",
    duration: "Product Development",
    timeline: "August 2024 - February 2025",
    deliverables:
      "Ticket purchasing interface, visitor management, QR wristband system, souvenir management, and operational dashboard",
    category: "Tourism Management System",

    overviewParagraphs: [
      "AWH Ticketing System is a digital ticket management platform developed based on client requirements to support tourism venue operations.",
      "The system was created to manage the complete visitor journey, starting from ticket purchase, visitor entry and exit validation, to additional service management.",
      "This platform became one of AWH's products that can be adapted for tourism locations and visitor-based businesses.",
    ],

    challenges: [
      "Building a ticketing system that can manage high-volume visitor data and daily transactions.",
      "Creating a QR-based access system using wristbands for visitor entry and exit validation.",
      "Managing additional visitor services such as welcome drinks and souvenir distribution.",
      "Developing an efficient operational interface for staff and administrators.",
    ],

    solutionParagraphs: [
      "Developed the frontend application using CodeIgniter, PHP, Bootstrap 4, and JavaScript to create a structured web application.",
      "Implemented AJAX-based interactions to provide smoother user experience during ticket processing and operational activities.",
      "Created interfaces for ticket purchasing, visitor verification, QR wristband management, and visitor service tracking.",
      "Integrated frontend components with backend processes to support tourism operational workflows.",
    ],

    resultsParagraphs: [
      "Delivered a complete tourism ticketing solution that helps manage visitor records and access control.",
      "Enabled staff to monitor visitor activities through ticket and QR wristband validation.",
      "Improved operational efficiency by digitizing ticket management and visitor service tracking.",
    ],

    galleryImages: [
      {
        src: "/img/ticketing1.png",
        alt: "AWH Ticketing System Home Page",
      },
      {
        src: "/img/ticketing2.png",
        alt: "AWH Ticketing System Home Page",
      },
    ],
  },
];
