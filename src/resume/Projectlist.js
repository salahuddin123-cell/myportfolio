import { Link } from "react-router-dom";

const Projectlist = [
    {
        id: 0,
        title: "project one",
        desc: "Crypto currency tracker using react and redux toolkit",
        des: "Coininfo.world is a website that provides real-time information and statistics about various cryptocurrencies. It allows users to view the current price, market cap, trading volume, and other important data about a wide range of digital assets. The website also features a news section where users can stay up-to-date with the latest developments in the cryptocurrency industry. Additionally, Coininfo.world offers various tools such as cryptocurrency converters and calculators that allow users to perform different calculations related to cryptocurrencies.",
        img: "../img/crypto.png",
        site: "https://coininfo.world//",
        link: "/0",
    },
    {
        id: 1,
        title: "project two",
        desc: "Real time chat application using Mern ans socket.io",
        des:'In this website you can chat realtime with other users .You can search user to chat with them .Real time notification is also implemented. Chat data saves in data base.',
        img: "../img/chat.png",
        link: "/1",
        site: "https://mytodos2.netlify.app/",
    },
    {
        id: 2,
        title: "project three",
        desc: "A simple ecommerce site in Mern stack",
        des:"It is website allow super admin to add and delete product for sell with category. A user can buy or add to cart the products",
        img: "../img/ecom2.png",
        link: "/2",
        site: "",
    },

    {
        id: 3,
        title: "project four",
        desc: "Covid19 tracker",
        des:"This is a website that provides real-time information and statistics about the COVID-19 pandemic. The website offers a clean and simple interface that allows users to view data about confirmed cases, deaths, and recoveries for various countries and regions around the world.Users can click on a specific country or region to view more detailed information about the current COVID-19 situation, including the number of active cases, total cases, deaths, and recoveries. The website also features a world map that displays the current COVID-19 situation for each country and region, with color-coded markers that indicate the severity of the outbreak.",
        img: "../img/covid.png",
        link: "/3",
        site: "https://covid19tracker12.netlify.app/",
    },

    {
        id: 4,
        title: "project five",
        desc: "Weather app for current day and weekly forecast using react",
        des:"This is a website that provides weather information for various locations around the world. The website allows users to enter the name of a city or town and view the current weather conditions, including the temperature, humidity, wind speed, and direction.The website features a simple and intuitive interface with a search bar where users can enter a location name. Once a location is entered, the website displays the current weather conditions and a five-day weather forecast, with information about the high and low temperatures for each day.",
        img: "../img/weather.png",
        link: "/4",
        site: "https://myweatherappx.netlify.app/",
    },
    {
        id: 5,
        title: "project six",
        desc: "A  social media app",
        des:"It is website that allow users to create and delete a post ,comment and like other's post and chat with other users",
        img: "../img/social.png",
        link: "/5",
        site: "",
        vdosrc: "https://www.youtube.com/embed/aZRMwLrwX44",
    },
];
export default Projectlist;
