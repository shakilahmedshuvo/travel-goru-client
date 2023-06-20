import { useEffect, useState } from "react";

const Home = () => {
    let slides = [
        {
            id: 1,
            url: "",
            title: "Cox’s  Bazar",
            description:
                "Escape to the pristine sands and turquoise waters of our breathtaking beach. Experience ultimate relaxation, adventure, and serenity as you soak up the sun and let your worries wash away with the gentle waves. Come discover your perfect paradise and make memories that will last a lifetime.",
        },
        {
            id: 2,
            url: "",
            title: "Sreemangal",
            description:
                "Embark on an unforgettable journey across the open seas with our luxurious and state-of-the-art boats. Whether youre seeking thrilling adventures or peaceful escapes, our vessels offer the perfect blend of comfort and excitement. Experience the freedom and exhilaration of life on the water, as you explore new horizons and create lifelong memories with those closest to you",
        },
        {
            id: 3,
            url: "",
            title: "Sundarbans",
            description:
                "Discover the awe-inspiring beauty of nature in our enchanting forest. Immerse yourself in the tranquil surroundings, breathe in the fresh air, and allow yourself to be fully present in the moment. Experience the thrill of adventure as you hike, bike, or simply stroll through our stunning wilderness. Come explore the wonders of our forest and reconnect with the natural world in a truly unforgettable way.",
        },
        {
            id: 4,
            url: "",
            title: "Santmartin",
            description:
                "",
        },
        {
            id: 5,
            url: "",
            title: "Dhaka",
            description:
                "Experience the pulse of the city and immerse yourself in the vibrant energy of our urban metropolis. From the bustling streets to the iconic landmarks, our city offers a never-ending array of sights, sounds, and experiences. Discover the diverse culture, world-class cuisine, and dynamic nightlife that make our city a destination like no other. Come explore and create unforgettable memories in the heart of the action.",
        },
        {
            id: 6,
            url: "",
            title: "Sajek Valley",
            description:
                "Discover the awe-inspiring beauty of nature in our enchanting forest. Immerse yourself in the tranquil surroundings, breathe in the fresh air, and allow yourself to be fully present in the moment. Experience the thrill of adventure as you hike, bike, or simply stroll through our stunning wilderness. Come explore the wonders of our forest and reconnect with the natural world in a truly unforgettable way.",
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [dim, setDim] = useState([]);

    const goToPrevious = () => {
        setCurrentIndex(currentIndex === 0
            ?
            slides.length - 1
            :
            currentIndex - 1);
    };

    const goToNext = () => {
        setCurrentIndex(currentIndex === slides.length - 1
            ?
            0
            :
            currentIndex + 1);
    };

    const cardClick = (id) => {
        setCurrentIndex(id);
    };

    const currentElement = slides.find((element) => element.id === currentIndex);
    useEffect(() => {
        setDim([
            ...slides.filter((e) => e.id > currentIndex),
            ...slides.filter((e) => e.id < currentIndex),
        ]);
    }, [currentIndex]);

    return (
        <div>
            this is home
        </div>
    );
};

export default Home;