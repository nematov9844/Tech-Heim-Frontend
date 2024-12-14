import { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import { Link } from "react-router-dom";

export default function NewProduct() {
  const [newProducts, setNewProducts] = useState()
  const { getData , } = useAxios();

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getData("newproduct");
        setNewProducts(data)
      } catch (error) {
        console.error("Failed to fetch data:", error.message);
      }
    }
    fetchData()
  }, [])
  
  return (
    <div>
      <div className="flex justify-between w-full">
        <h1 className="md:text-3xl font-bold text-gray-900">New Products</h1>
        <Link to={"/product"} className="text-blue-600 hover:text-blue-700 font-medium">View all</Link>
      </div>
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:!grid-cols-2 md:!grid-cols-3 lg:!grid-cols-4">
        {
          newProducts?.map((item) => (
            <Link to={`all/newproduct/${item.id}`} key={item.id}>
              <div className="flex items-center justify-center flex-col w-full" >
                <div className="w-auto max-w-full max-h-full h-auto ">
                  <img src={item.img[0]} alt="" className="w-full !h-[240px] object-cover" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h1>{item.title.length > 15 ? item.title.slice(0, 25) + "..." : item.title}</h1>
                  <div className="flex w-full items-center justify-between">
                    <h4>{item.price_current}</h4>
                    <p>{item.rate}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))
        }
      </div>
    </div>
  )
}
