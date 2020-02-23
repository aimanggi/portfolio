import portfolio1 from "../img/portfolio-1.png";
import portfolio2 from "../img/portfolio-2.png";
import portfolio3 from "../img/portfolio-3.png";
import portfolio4 from "../img/portfolio-4.png";

const portfolio = [
  {
    name: "Boot Camp Final Project",
    image: portfolio1,
    project: "Monggovest",
    url:"https://monggovestapp.herokuapp.com",
    technologies: ["ReactJs", "REST API", "Heroku"],
    summary: "Monggovest is a collaboration medium for investor and breeder. Developed for Glints Academy boot camp final project",
    content: [
      {
        section: "The Story",
        data:
          "I was a Frontend Web Developer student at Glints Academy boot camp. For final project we divided in a team to develop a product with determined topic. We got a challenge to enrich app for livestock investment called MonggoVest. This app actually initiate by graduated team before. Our team focused to improve its functionality and change the stack from VueJs to ReactJs for client side and Ruby on Rails for server side."
      },
      {
        section: "What is MonggoVest?",
        data:
          "Monggovest is a collaboration medium for investor and breeder. Our main purpose in to escalate live stock production. With MonggoVest, investor can reach breeder across Indonesia without going to their barn."
      },
      {
          section: "The Challenge",
          data: "",
      },
      {
            section: "Development",
            data: "I was responsible to make authentication features. The client side authentication provided by JWT token.",
      }
    ]
  },
  {
    name: "First Commercial Website",
    image: portfolio2,
    project: "Love Nest",
    technologies: ["ReactJs", "REST API", "Heroku"],
    summary: "Build website for a bridal industry company in Singapore. I am as Frontend Developer in this team responsible to deliver website according client requirement. Working closely with UI/UX Desiginer to ensure this product having good functionality and design",
    url:"https://lovenest.com.sg",
    content: [
      {
        section: "The Story",
        data:
          "Build website for a bridal industry company in Singapore. I am as Frontend Developer in this team responsible to deliver website according client requirement. Working closely with UI/UX Desiginer to ensure this product having good functionality and design"
      },
      {
        section: "What is MonggoVest?",
        data:
          "Monggovest is a collaboration medium for investor and breeder. Our main purpose in to escalate live stock production. With MonggoVest, investor can reach breeder across Indonesia without going to their barn."
      },
      {
          section: "The Challenge",
          data: "",
      },
      {
            section: "Development",
            data: "I was responsible to make authentication features. The client side authentication provided by JWT token.",
      }
    ]
  },
  {
    name: "Case Study: Redesign Digital Banking App",
    image: portfolio3,
    url: "https://www.figma.com/proto/Ygj0aLoPlzLYVG7Bgsfiak/Meja-Putih---UI%2FUX-Challenge-CoCreate-2020?node-id=49%3A2&scaling=scale-down",
    project: "Better Planning and Tracking With Jenius",
    summary: "I join UI/UX competition held by Jenius, a digital bank pioneer in Indonesia. This is a team competition and I am responsible to do digital banking research, competitor analysis, user interview and design.",
    technologies: ["ReactJs", "REST API", "Heroku"],
    content: [
      {
        section: "The Story",
        data:
          "I was a Frontend Web Developer student at Glints Academy boot camp. For final project we divided in a team to develop a product with determined topic. We got a challenge to enrich app for livestock investment called MonggoVest. This app actually initiate by graduated team before. Our team focused to improve its functionality and change the stack from VueJs to ReactJs for client side and Ruby on Rails for server side."
      },
      {
        section: "What is MonggoVest?",
        data:
          "Monggovest is a collaboration medium for investor and breeder. Our main purpose in to escalate live stock production. With MonggoVest, investor can reach breeder across Indonesia without going to their barn."
      },
      {
          section: "The Challenge",
          data: "",
      },
      {
            section: "Development",
            data: "I was responsible to make authentication features. The client side authentication provided by JWT token.",
      }
    ]
  },
  {
    name: "Behind This Code",
    image: portfolio4,
    project: "My Portfolio",
    technologies: ["ReactJs", "REST API", "Heroku"],
    summary: "Comming Soon. Will reveal how this web build.",
    url: null,
    content: [
      {
        section: "The Story",
        data:
          "Let's reveal how this web build."
      },
      {
        section: "What is MonggoVest?",
        data:
          "Monggovest is a collaboration medium for investor and breeder. Our main purpose in to escalate live stock production. With MonggoVest, investor can reach breeder across Indonesia without going to their barn."
      },
      {
          section: "The Challenge",
          data: "",
      },
      {
            section: "Development",
            data: "I was responsible to make authentication features. The client side authentication provided by JWT token.",
      }
    ]
  }
];

export default portfolio;
