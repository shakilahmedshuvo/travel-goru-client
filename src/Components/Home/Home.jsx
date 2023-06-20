import { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import { FaArrowRight } from "react-icons/fa";
import { MdKeyboardDoubleArrowRight, MdKeyboardDoubleArrowLeft } from "react-icons/md";
import ActiveCard from "../ActiveCard/ActiveCard";
import ImageSlider from "../ImageSlider/ImageSlider";
import saImg from "../../assets/images/Sajek.png"
import suImg from "../../assets/images/sundorbon.png"
import srImg from "../../assets/images/Sreemongol.png"

const Home = () => {
    let slides = [
        {
            id: 0,
            url: saImg,
            title: "Cox’s  Bazar",
            description:
                "Cox Bazar is a coastal town in Bangladesh, known for having the world's longest natural sandy beach. It stretches approximately 120 kilometers along the Bay of Bengal. The area is a popular tourist destination, attracting visitors with its picturesque landscape and vibrant local culture. Cox Bazar offers various activities, including swimming, sunbathing, and exploring nearby attractions such as Himchari National Park and the Buddhist temples in Ramu. It is a serene retreat for nature lovers and a significant contributor to Bangladesh's tourism industry."
        },
        {
            id: 1,
            url: srImg,
            title: "Sreemangal",
            description:
                "Sreemangal is a small town located in the northeastern part of Bangladesh. It is known as the tea capital of the country due to its vast tea gardens and plantations. The area is blessed with lush green landscapes, rolling hills, and numerous streams. Sreemangal is famous for its exquisite tea, especially the world-renowned seven-color tea.The region is also home to Lawachara National Park, a haven for wildlife and bird enthusiasts. The park is known for its diverse flora and fauna, including the critically endangered Hoolock gibbon. Sreemangal offers a peaceful and serene environment, attracting nature lovers and tourists alike.",
        },
        {
            id: 2,
            url: suImg,
            title: "Sundarbans",
            description:
                "The Sundarbans is a vast mangrove forest located in Bangladesh and India, primarily in the delta of the Ganges, Brahmaputra, and Meghna rivers. It is the largest single block of tidal halophytic mangrove forest in the world and is recognized as a UNESCO World Heritage Site. The Sundarbans is known for its rich biodiversity and unique ecosystem, serving as a habitat for various plant and animal species, including the iconic Bengal tiger. It is also home to other wildlife such as spotted deer, crocodiles, snakes, and numerous bird species. The Sundarbans is an important ecological region, providing protection against coastal erosion and acting as a natural barrier against storms and cyclones."
        },
        {
            id: 3,
            url: saImg,
            title: "Saint Martin",
            description:
                "Bangladesh, located in South Asia, is a country known for its rich cultural heritage and natural beauty. It has a population of over 160 million people and is the eighth-most populous country in the world. The capital city is Dhaka. Bangladesh is renowned for its lush green landscapes, the Sundarbans mangrove forest, and the beautiful Cox's Bazar beach. Saint Martin, a small island off the coast of Bangladesh, is famous for its pristine beaches, clear turquoise waters, and vibrant coral reefs, making it a popular tourist destination."
        },
        {
            id: 4,
            url: srImg,
            title: "Rangamati",
            description:
                "Rangamati is a picturesque district in southeastern Bangladesh. It is situated in the Chittagong Hill Tracts region, known for its stunning natural beauty and ethnic diversity. Rangamati is surrounded by hills, lush forests, and scenic lakes, including the breathtaking Kaptai Lake, which is the largest man-made lake in Bangladesh. The district is home to various indigenous communities, adding to its cultural richness. Rangamati offers opportunities for boating, hiking, and exploring tribal villages, allowing visitors to immerse themselves in the region's captivating landscapes and vibrant local traditions."
        },
        {
            id: 5,
            url: suImg,
            title: "Sajek Valley",
            description:
                "Sajek Valley is a mesmerizing tourist destination located in the Rangamati district of Bangladesh. It is nestled in the Chittagong Hill Tracts region, surrounded by lush green hills and stunning landscapes. The valley offers panoramic views of the hills, clouds, and the Sajek River winding through the valley. It is renowned for its serene atmosphere, cool climate, and picturesque beauty. Visitors can enjoy activities like trekking, hiking, and exploring the indigenous villages nearby. Sajek Valley has become a popular getaway for nature lovers and adventure seekers seeking tranquility and natural splendor."
        },
    ];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [dim, setDim] = useState([]);
    const goToPrevious = () => {
        setCurrentIndex(currentIndex === 0 ? slides.length - 1 : currentIndex - 1);
    };

    const goToNext = () => {
        setCurrentIndex(currentIndex === slides.length - 1 ? 0 : currentIndex + 1);
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
        <div
            className="relative h-fit xl:h-screen text-white">
            <img
                src={currentElement.url}
                alt="Background image"
                className="absolute w-full h-full object-cover" />
            <div
                className="mx-auto relative z-10">
                <NavBar />
                <div
                    className="pt-24 overflow-hidden">
                    <div>
                        <div
                            className="max-w-full pl-28 lg:flex lg:gap-x-6">
                            <div
                                className="w-full lg:w-2/5 lg:shrink-0 ">
                                <h1
                                    className="text-5xl lg:text-8xl font-bold pb-6 uppercase">
                                    {currentElement.title}
                                </h1>
                                <p
                                    className="text-base lg:text-base pb-5 text-justify">
                                    {currentElement.description}
                                </p>
                                <button
                                    className="px-20 py-3 rounded-lg bg-yellow-500 text-black text-xl mb-6 flex items-center">
                                    Booking <FaArrowRight className="ml-3" />
                                </button>
                            </div>
                            <div
                                className="w-max">
                                <div
                                    className="flex">
                                    <ActiveCard
                                        currentIndex={currentIndex}
                                        bg={currentElement}
                                        click={cardClick} />
                                    {
                                        dim.map((slide, i) => (
                                            <ImageSlider
                                                key={i}
                                                slide={slide}
                                                click={cardClick} />
                                        ))
                                    }
                                </div>
                                <div
                                    className="flex gap-6 pt-16">
                                    <div
                                        onClick={goToPrevious}
                                        className="text-3xl text-black bg-white p-2 rounded-full items-center cursor-pointer btn">
                                        <MdKeyboardDoubleArrowLeft />
                                    </div>
                                    <div
                                        onClick={goToNext}
                                        className="text-3xl text-black bg-white p-2 rounded-full items-center cursor-pointer btn">
                                        <MdKeyboardDoubleArrowRight />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Home;