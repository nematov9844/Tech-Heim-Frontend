import Header from "../components/Header";
import { useState, useEffect } from "react";
import CategorySection from "../components/CategorySection";
import useAxios from "../hooks/useAxios";

export default function Products() {
    const [laptopData, setLaptopData] = useState();
    const [cameraData, setCameraData] = useState();
    const [accessoriesData, setAccessoriesData] = useState();
    const [smartPhoneData, setSmartPhoneData] = useState();
    const [gamingData, setGamingData] = useState();
    const { getData } = useAxios();

    useEffect(() => {
        async function fetchData() {
            try {
                const data1 = await getData("laptop");
                const data2 = await getData("camera");
                const data3 = await getData("accessories");
                const data4 = await getData("smartphone");
                const data5 = await getData("gaming");
                setLaptopData(data1);
                setCameraData(data2);
                setAccessoriesData(data3);
                setSmartPhoneData(data4);
                setGamingData(data5);
            } catch (error) {
                console.error("Failed to fetch data:", error.message);
            }
        }
        fetchData();
    }, []);

    return (
        <div className="max-w-[1440px] mx-auto">
            <Header />
            <div className="flex flex-col gap-4 p-4">
                {/* Laptop Section */}
                <CategorySection title="Laptop" data={laptopData} />
                
                {/* Camera Section */}
                <CategorySection title="Camera" data={cameraData} />

                {/* Accessories Section */}
                <CategorySection title="Accessories" data={accessoriesData} />

                {/* Smartphone Section */}
                <CategorySection title="Smartphone" data={smartPhoneData} />

                {/* Gaming Section */}
                <CategorySection title="Gaming" data={gamingData} />
            </div>
        </div>
    );
}