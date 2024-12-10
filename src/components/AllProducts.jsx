import { useParams } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import { useEffect, useState } from "react";
import { ProductGallery } from "./ProductImage";
import { ProductInfo } from "./ProductInfo";
import Header from "./Header";
import NotFound from "./NonFound";

export default function AllProducts() {
    const { category, id } = useParams(); // URL dan parametrlarni olish
    const { getData, updateData } = useAxios();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [update, setUpdate] = useState(false)


    // Ma'lumotlarni olish
    useEffect(() => {
        async function fetchProduct() {
            try {
                const data = await getData(`${category}/${id}`); // To'g'ri endpointni chaqirish
                setProduct(data);
                setError(null);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        fetchProduct();
    }, []);
    const updateExample = async (item = {}, id = Number) => {
        const payload = { ...item, islike: !item.islike, };
        try {
            const updatedData = await updateData(`${category}/${id}`, payload);
            console.log("Updated data:", updatedData);
        } catch (error) {
            console.error("Error updating data:", error.message);
        }
    };
    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <p>Loading...</p>
            </div>
        );
    }

    // Xato holatini ko'rsatish
    if (error || !product) {
        return <NotFound />;
    }

    return (
        <div className="min-h-screen bg-gray-50 max-w-[1440px] mx-auto">
            <Header />
            <div className="mx-auto max-w-7xl px-4 py-8">
                {/* Breadcrumb navigation */}
                <nav className="mb-8 flex items-center text-sm text-gray-500">
                    <a href="/" className="hover:text-gray-900">Home</a>
                    <span className="mx-2">/</span>
                    <a href={`/product`} className="hover:text-gray-900">Products</a>
                    <span className="mx-2">/</span>
                    <span className="text-gray-900">{product.title}</span>
                </nav>

                {/* Product details */}
                <div className="grid gap-8 lg:grid-cols-2">
                    <ProductGallery images={product.img} />
                    <ProductInfo
                        title={product.title}
                        price={product.price_current}
                        rating={product.rate}
                        reviews={128} // Dinamik qilib ishlasangiz bo'ladi
                        specs={product.description}
                        item={product}
                        link={category}
                        setUpdate={setUpdate}
                        update={update}
                    />
                </div>
            </div>
        </div>
    );
}
