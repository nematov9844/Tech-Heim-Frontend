import Accessories from "../assets/Accessories"
import Camera from "../assets/Camera"
import Gaming from "../assets/Gaming"
import Laptop from "../assets/Laptop"
import SmartPhone from "../assets/SmartPhone"
import SmartWatch from "../assets/SmartWatch"

export default function Category() {

    return (
        <div className="grid gap-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            <div className="flex flex-col w-[120px] h-[100px] sm:w-auto sm:h-auto gap-2 items-center">
                <Accessories />
                <p>Accessories</p>
            </div>
                        <div className="flex flex-col w-[120px] h-[100px] sm:w-auto sm:h-auto gap-2 items-center">
                <Camera />
                <p>Camera</p>
            </div>
                        <div className="flex flex-col w-[120px] h-[100px] sm:w-auto sm:h-auto gap-2 items-center">
                <Laptop />
                <p>Laptop</p>
            </div>
                        <div className="flex flex-col w-[120px] h-[100px] sm:w-auto sm:h-auto gap-2 items-center">
                <SmartPhone />
                <p>Smart Phone</p>
            </div>
                        <div className="flex flex-col w-[120px] h-[100px] sm:w-auto sm:h-auto gap-2 items-center">
                <Gaming />
                <p>Gaming</p>
            </div>
                        <div className="flex flex-col w-[120px] h-[100px] sm:w-auto sm:h-auto gap-2 items-center">
                <SmartWatch />
                <p>Smart Watch</p>
            </div>
        </div>
    )
}
