import { Carousel } from 'antd';
import 'antd/dist/reset.css';
import { saleProduct } from '../data/data';

const Sliders = () => {
    return (
        <div className="w-full h-auto bg-[#063A88] p-4 relative">
            <Carousel
                dots={false} // Nuqtalarni o'chirish
                infinite={true} // Cheksiz aylanish yoqilgan
                slidesToShow={3} // Default slaydlar soni
                autoplay
                responsive={[
                    {
                        breakpoint: 1084,
                        settings: {
                            slidesToShow: 4,
                        },
                    },
                    {
                        breakpoint: 800,
                        settings: {
                            slidesToShow: 3,
                        },
                    },
                    {
                        breakpoint: 640,
                        settings: {
                            slidesToShow: 2,
                        },
                    },
                    {
                        breakpoint: 340,
                        settings: {
                            slidesToShow: 1,
                        },
                    },
                ]}
                draggable // Qo'l bilan surish yoqilgan
            >
                {saleProduct.map((item) => (
                    <div key={item.id} >
                        <div className="flex flex-col gap-2 bg-white rounded-lg shadow p-4 h-full mx-3">
                            <div className="w-full h-[150px]">
                                <img
                                    className="w-full h-full rounded"
                                    src={item.img}
                                    alt={item.title}
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <h1 className="text-lg font-semibold text-gray-800">
                                    {item.title.length > 12
                                        ? item.title.slice(0, 12) + '...'
                                        : item.title}
                                </h1>
                                <div className="flex justify-between items-center">
                                    <p className="text-sm text-gray-500 line-through">
                                        {item.price__old}
                                    </p>
                                    <p className="text-lg text-gray-700">
                                        {item.price__current}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default Sliders;
