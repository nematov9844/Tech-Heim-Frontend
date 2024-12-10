import { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import CategorySection from "../components/CategorySection";
import Header from "../components/Header";

export default function IslikesPage() {
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
                setLaptopData(data1.filter(Item=>Item.isLike));
                setCameraData(data2.filter(Item=>Item.isLike));
                setAccessoriesData(data3.filter(Item=>Item.isLike));
                setSmartPhoneData(data4.filter(Item=>Item.isLike));
                setGamingData(data5.filter(Item=>Item.isLike));
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
                <CategorySection title="Laptop" data={laptopData} />
                <CategorySection title="Camera" data={cameraData} />
                <CategorySection title="Accessories" data={accessoriesData} />
                <CategorySection title="Smartphone" data={smartPhoneData} />
                <CategorySection title="Gaming" data={gamingData} />
            </div>
        </div>
    );
}