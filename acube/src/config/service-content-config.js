import aiHero from '../images/services/artificial-intelligence/ai-hero.webp'
import aiListImg from '../images/services/artificial-intelligence/ai-list-icons.webp'

// webapp
import webHero from '../images/services/web-app/web-hero.webp'
import webListImg from '../images/services/web-app/web-list-icons.webp'

// blockchain
import blockchainHero from '../images/services/blockchain/blockchain-hero.webp'
import blockchainListImg from '../images/services/blockchain/blockchain-list-icons.webp'

// cloud
import cloudHero from '../images/services/cloud/cloud-hero.webp'
import cloudListImg from '../images/services/cloud/cloud-list-icons.webp'

// robotic
import roboticHero from '../images/services/robotic-automation/robotic-hero.webp'
import roboticListImg from '../images/services/robotic-automation/robotic-list-icons.webp'

// devops
import devopsHero from '../images/services/devops/devops-hero.webp'
// import devopsListImg from '../images/services/devops/devops-list-icons.webp'

export const serviceContentConfig = [
    {
        pageName: "ai",
        title: "Artificial Intelligence",
        content: "Our team of developers are experienced with AI technology to meet your business needs. We offer smart AI / ML solutions that are cost effective in nature and offer detailed insights that can help the business grow.",
        backgroundImage: aiHero,
        benefitsList: {
            title: "Why Choose An AI Developer From Acube?",
            benefits: [
                "All developers are bound by strict confidentiality and privacy NDAs.",
                "State-of-the-art infrastructure with secure firewalls and IP protection systems.",
                "Our Android App developers are well-versed with Agile development methodology.",
                "Developers well versed in English communication and can integrate well into your team.",
                "A rigorous QA testing process to ensure your App will work across all Android devices.",
                "A developer assigned to you is solely dedicated to your project. This ensures the highest quality delivered to you."
            ],
        },

        service: {
            image: aiListImg,
            alt: "ai-services"
        }
    },
    {
        pageName: "web-development",
        title: "Build A Web App",
        content: "Reliable, fast, secure, and ultimately - amazing user experience. That’s what you look for when you want to create a web application. Build your application that works across different devices, while growing your business.",
        backgroundImage: webHero,
        benefitsList: {
            title: "Why Choose A Web App Developer From Acube?",
            benefits: [
                "All developers are bound by strict confidentiality and privacy NDAs State-of-the-art infrastructure with secure firewalls and IP protection systems.",
                "Our Android App developers are well-versed with Agile development methodology.",
                "Developers well versed in English communication and can integrate well into your team.",
                "A rigorous QA testing process to ensure your App will work across all Android devices.",
                "A developer assigned to you is solely dedicated to your project. This ensures the highest quality delivered to you.",
            ],
        },

        service: {
            image: webListImg,
            alt: "web-services"
        }
    },
    {
        pageName: "blockchain-app",
        title: "Build Your Blockchain App",
        content: "Future-proof your business with the help of blockchain technology. Our specialists can create and implement digital solutions for organizations by securing information that is distributed publicly via the Internet without being copied or tampered.",
        backgroundImage: blockchainHero,
        benefitsList: {
            title: "Why Choose A Blockchain Developer From Acube?",
            benefits: [
                "All developers are bound by strict confidentiality and privacy NDAs",
                "State-of-the-art infrastructure with secure firewalls and IP protection systems.",
                "Developers well versed in English communication and can integrate well into your team.",
                "A rigorous QA testing process to ensure your App will work across all Android devices.",
                "A developer assigned to you is solely dedicated to your project. This ensures the highest quality delivered to you.",
            ],
        },

        service: {
            image: blockchainListImg,
            alt: "blockchain-services"
        }
    },

    {
        pageName: "cloud",
        title: "Build Your Cloud Strategy & Development",
        content: "Cloud computing has seen increasing demand over the past several years and is defined as the delivery of business tools and applications such as databases, software, and servers across the internet. A lot of businesses are now adopting cloud computing because of its cost savings, flexibility, and ease of scalability.",
        backgroundImage: cloudHero,
        benefitsList: {
            title: "Why Choose A Blockchain Developer From Acube?",
            benefits: [
                "All developers are bound by strict confidentiality and privacy NDAs",
                "State-of-the-art infrastructure with secure firewalls and IP protection systems.",
                "Developers well versed in English communication and can integrate well into your team.",
                "A rigorous QA testing process to ensure your App will work across all Android devices.",
                "A developer assigned to you is solely dedicated to your project. This ensures the highest quality delivered to you.",
            ],
        },

        service: {
            image: cloudListImg,
            alt: "cloud-services"
        }
    },
    {
        pageName: "robotic-automation",
        title: "Robotic Process Automation",
        content: "Increase productivity in your business and daily operations using - Robotic Process Automation. Automate manual processes for any repetitive, rule-based and high volume jobs that you have. Hire an RPA developer to help you create human-like manual interaction, reduce human error and turn around times, and even annual savings.",
        backgroundImage: roboticHero,
        benefitsList: {
            title: "Why Choose A RPA Developer From Acube?",
            benefits: [
                "All developers are bound by strict confidentiality and privacy NDAs",
                "State-of-the-art infrastructure with secure firewalls and IP protection systems.",
                "Developers well versed in English communication and can integrate well into your team.",
                "A rigorous QA testing process to ensure your App will work across all Android devices.",
                "A developer assigned to you is solely dedicated to your project. This ensures the highest quality delivered to you.",
            ],
        },

        service: {
            image: roboticListImg,
            alt: "robotic-services"
        }
    },
    {
        pageName: "devops",
        title: "devops",
        content: "Shorten your systems development life cycle and deliver high quality software. Get end-to-end automation for shorter time-to-market, resulting in faster product release using our robust infrastructure. Our team ensures agile delivery by reducing iterations, anticipating problems, and ensuring smooth execution throughout the process.",
        backgroundImage: devopsHero,
        benefitsList: {
            title: "Why Choose A Business Intelligence Professional From Acube?",
            benefits: [
                "All developers are bound by strict confidentiality and privacy NDAs",
                "State-of-the-art infrastructure with secure firewalls and IP protection systems.",
                "Developers well versed in English communication and can integrate well into your team.",
                "A rigorous QA testing process to ensure your App will work across all Android devices.",
                "A developer assigned to you is solely dedicated to your project. This ensures the highest quality delivered to you.",
            ],
        },

        service: {
            image: aiListImg,
            alt: "devops-services"
        }
    },
];

export const urlRouting = [
    {
        pathname: "/services/artificial-intelligence", pageName: "ai"
    },
    {
        pathname: "/services/web-app", pageName: "web-development"
    },
    {
        pathname: "/services/blockchain-app", pageName: "blockchain-app"
    },
    {
        pathname: "/services/cloud-strategy", pageName: "cloud"
    },
    {
        pathname: "/services/robotic-process-automation", pageName: "robotic-automation"
    },
    {
        pathname: "/services/devops", pageName: "devops"
    },
]
