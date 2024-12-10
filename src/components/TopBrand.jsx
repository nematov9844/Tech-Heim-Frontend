import Apple from '../assets/apple.png';
import Sony from '../assets/sony.png';
import Samsung from '../assets/samsung.png';
import Canon from '../assets/cannon.png';
import Huawie from '../assets/huawie.png';
import Lenevo from '../assets/lenovo.png';
import { Link } from 'react-router-dom';

export default function TopBrand() {
  return (
    <div className="fex flex-col gap-3 justify-center items-center">
        <div className="flex justify-between items-center w-full">
            <h1 className='md:text-3xl font-bold text-gray-900'>Top Brands</h1>
            <Link to={"product"} className="text-blue-600 hover:text-blue-700 font-medium">View all</Link>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 items-center gap-4'>
<div>
    <img src={Apple} alt={Apple} />
</div>
<div>
    <img src={Sony} alt={Sony} />
</div>
<div>
    <img src={Samsung} alt={Samsung} />
</div>
<div>
    <img src={Canon} alt={Canon} />
</div>
<div>
    <img src={Huawie} alt={Huawie} />
</div>
<div>
    <img src={Lenevo} alt={Lenevo} />
</div>
        </div>
    </div>
  )
}
