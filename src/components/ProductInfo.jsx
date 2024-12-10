import { Star, ShoppingCart, Heart } from 'lucide-react';
import useAxios from '../hooks/useAxios';
import { HeartFilled, HeartOutlined } from '@ant-design/icons';
import { useState } from 'react';

export function ProductInfo({ title, price, rating, reviews, specs, item, link, setUpdate }) {
    const { updateData } = useAxios();
    const [isLiked, setIsLiked] = useState(item.islike);
    const [isBought, setIsBought] = useState(item.isBuy);

    const updateLikeStatus = async (item) => {
        const payload = { ...item, islike: !isLiked };
        try {
            const updatedData = await updateData(`${link}/${item.id}`, payload);
            console.log("Updated like status:", updatedData);
            setIsLiked(!isLiked);
            setUpdate((prev) => !prev);
        } catch (error) {
            console.error("Error updating like status:", error.message);
        }
    };

    const updateBuyStatus = async (item) => {
        const payload = { ...item, isBuy: !isBought };
        try {
            const updatedData = await updateData(`${link}/${item.id}`, payload);
            console.log("Updated buy status:", updatedData);
            setIsBought(!isBought);
            setUpdate((prev) => !prev);
        } catch (error) {
            console.error("Error updating buy status:", error.message);
        }
    };

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
                <div className="mt-2 flex items-center gap-4">
                    <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                            <Star
                                key={i}
                                className={`h-5 w-5 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                            />
                        ))}
                    </div>
                    <span className="text-sm text-gray-600">({reviews || 0} reviews)</span>
                </div>
            </div>

            <div className="flex items-center justify-between">
                <div>
                    <p className="text-3xl font-bold text-gray-900">{price}</p>
                    <p className="text-sm text-gray-500">Free delivery</p>
                </div>
                <div className="flex gap-2">
                    <button
                        onClick={() => updateBuyStatus(item)}
                        className={`flex items-center gap-2 rounded-lg ${isBought ? 'bg-gray-400' : 'bg-blue-600'} px-6 py-3 text-white hover:bg-blue-700`}>
                        <ShoppingCart className="h-5 w-5" />
                        {isBought ? 'Added to Cart' : 'Add to Cart'}
                    </button>
                    <button onClick={() => updateLikeStatus(item)} className="rounded-lg border border-gray-300 p-3 hover:bg-gray-50">
                        {isLiked ? <HeartFilled /> : <HeartOutlined />} {/* Toggle based on local state */}
                    </button>
                </div>
            </div>

            {specs ? (
                <div>
                    <p>{specs}</p>
                </div>
            ) : (
                <div className="text-sm text-gray-500">No specifications available</div>
            )}
        </div>
    );
}
