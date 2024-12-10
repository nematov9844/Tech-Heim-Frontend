

export default function BannerComponent() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center w-full h-auto p-5 md:h-[60vh] bg-[#223949] relative -z-20 overflow-hidden">
        <div className="w-full md:w-[40%] text-white flex flex-col justify-center items-center">
            <h1 className="text-4xl md:text-[53px] font-medium">SMART WATCH</h1>
            <p className="text-xl md:text-[24px] font-light">Various designs and brands</p>
            <button className="bg-[#FF6951] p-1">view</button>
        </div>
        <div className="w-[80%] md:w-[40%] ">
            <div className="w-[800px] h-[655px] bg-[#FF6951] absolute -top-[20%] bottom-[50%] left-[60%] right-[40%] -z-10 rounded-full"></div>
            <img className="z-20" src="https://s3-alpha-sig.figma.com/img/7706/8b51/ae51c3d69ae399ccea86a7513725f38e?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=V17gIdjFBaRloVZfWCfKydqyG-Wo2SYzgsyp8UbVTcwAIf9pjNazEfneWcOZWc7L~grvVHyk2CI6kwv8kmwbwEy8GjjqSe8TphgBPTbevVBS5ShI50EhGYIv2EsOZ8S4xwB602AO9CfY2TBe2C3lNAqFC0KsRAcsEBVhRDtDESKAXbjUM-K2wGN0h4hocrRuEsbYqIXVf12y740uuE2UoEYfFlnUdsKUygYLzspoi7X7sBVhpfuu3JisV1aGvHrgFAnDC0TU37S7MZA11iV4t86UhAW4741sxblmZNpvVMT3A2I-SLNgqTUbsPqozMJwwkV8XeyDKerYPWB8EeO4ww__" alt="" />
        </div>
    </div>
  )
}
