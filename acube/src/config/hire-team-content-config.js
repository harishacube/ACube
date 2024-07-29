import reactJsHero from '../images/hire-team/react-js/reacthero-img.webp'
import reactHeroImg from '../images/hire-team/hero-img.webp'
import technologyImg from '../images/hire-team/react-js/reactjs-list.webp'

export const HireTeamContentConfig = [
    {
        pageName: "reactjs-developer",
        title: "Build Your Custom ReactJS Solution with Our Experts",
        content: "Our seasoned ReactJS developers in India are ready to help you create a robust and scalable product tailored to your unique needs. From initial concept to continuous support, we ensure your project is in the best hands.",
        backgroundImage: reactJsHero,
        bannerImage: reactHeroImg,
        alt: "react-banner",
        benefits: [
            "Highly skilled at front-end engineering using Object-Oriented JavaScript (ES5, ES6), top JavaScript libraries and frameworks (ReactJS), HTML, and CSS.",
            "Well-versed with programming languages like, NodeJS, ReactJS, Redux, React Native, HTML, CSS3, JSON-API, REST Services.",
            "Skilled in Typescript, Jest, Swagger, Typeorm, Node-cache, Json-rules-engine, Elastic search engine, Pdfkit.",
            "Sound knowledge of testing applications through unit and integration tests, and experience with React Testing Library / Enzyme.",
            "Experience with relational database (SQL Server) design and implementation."
        ],
        // service: {
        //     image: aiListImg,
        //     alt: "ai-services"
        // },
        technologyList: {
            title: "Our ReactJS Developers Are Highly Skilled",
            image: technologyImg,
            alt: "react-js"
        }
    },
    {
        pageName: "ml",
        title: "Machine Learning",
        content: "Our Machine Learning services help you harness the power of data to gain valuable insights and make informed decisions.",
        backgroundImage: '/images/services/ml-background.jpg',
        benefits: [
            "Experienced ML developers.",
            "Customized ML solutions.",
            "Data-driven decision-making.",
            "Seamless integration.",
            "Scalable and efficient models.",
            "Continuous support and maintenance."
        ]
    },

];

export const urlRouting = [
    {
        pathname: "/hire-team/hire-reactjs-developer", pageName: "reactjs-developer"
    },
    {
        pathname: "/services/artificial-intelligence", pageName: "ml"
    },
]
