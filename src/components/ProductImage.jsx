import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function ProductGallery({ images }) {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextImage = () => {
        setActiveIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-lg bg-gray-100">
                <img
                    src={images[activeIndex] || ''}
                    alt={`Image ${activeIndex + 1}`}
                    className="h-full w-full object-cover object-center"
                    onError={(e) => e.target.src = 'default-image-url'} // default rasmga o'tish
                />
            </div>

            <div className="absolute inset-0 flex items-center justify-between p-4">
                <button
                    onClick={prevImage}
                    className="rounded-full bg-white p-2 shadow-md hover:bg-gray-100"
                >
                    <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                    onClick={nextImage}
                    className="rounded-full bg-white p-2 shadow-md hover:bg-gray-100"
                >
                    <ChevronRight className="h-5 w-5" />
                </button>
            </div>

            <div className="mt-4 flex gap-4">
                {images.map((image, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`relative overflow-hidden rounded-lg ${index === activeIndex ? 'ring-2 ring-blue-500' : ''}`}
                    >
                        <img
                            src={image || 'default-image-url'} // default rasmga o'tish
                            alt={`Thumbnail ${index + 1}`}
                            className="h-16 w-16 object-cover rounded-lg"
                            onError={(e) => e.target.src = 'default-image-url'} // default rasmga o'tish
                        />
                    </button>
                ))}
            </div>
        </div>
    );
}
