import { Link } from 'react-router-dom';
import Header from './Header';

export default function NotFound() {
    return (
        <div className='max-w-[1440px] mx-auto'>
            <Header />
            <div className="flex flex-col items-center justify-center h-[80vh] bg-gray-100">
                <img
                    src="https://uzum.uz/static/img/penguin.a739ac8.png"
                    alt="Not Found"
                    className="mt-8 max-w-xs md:max-w-[200px] transition-all duration-300 ease-in-out hover:scale-110 hover:rotate-[360deg]"
                />
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-black transition-all duration-300 ease-in-out hover:scale-110 hover:-rotate-2 hover:text-red-500 hover:[text-shadow:4px_4px_8px_rgba(255,0,0,0.4)]">
                        Nimadir oʻxshamadi
                    </h1>
                    <p className="mt-4 text-2xl font-medium text-gray-700 transition-all duration-300 ease-in-out hover:scale-110 hover:rotate-2 hover:text-gray-800 hover:[text-shadow:0px_15px_5px_rgb(0,0,0),_15px_-15px_5px_rgb(0,0,0)]">
                        Orqaga qaytib koʻring yoki asosiy sahifaga oʻting
                    </p>
                    <Link
                        to="/"
                        className="mt-6 inline-block px-6 py-3 bg-gray-500 text-white text-lg transition-all duration-300 ease-in-out hover:scale-110 hover:-rotate-2 font-semibold rounded-lg shadow hover:bg-gray-400 hover:shadow-lg hover:shadow-black transition-colors"
                    >
                        Go to Homepage
                    </Link>
                </div>
            </div>
        </div>
    );
}
