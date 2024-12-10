
export default function Hero() {
  return (
    <div className="flex  flex-row">
        <div className="lg:w-[50%] w-full flex flex-col gap-1 sm:gap-[50px] justify-center items-start">
            <h1 className="font-semibold sm:text-6xl sm:leading-[70px] text-[#042352]">Tech Heim</h1>
            <h4 className="text-[#F45E0C] text-[9px] sm:text-3xl font-medium text-start ">``<span className="text-[#042352]">Join the</span> digital revolution``</h4>
            <button className="bg-[#F45E0C] p-1 text-[9px] text-white sm:py-1 sm:px-3 sm:text-xl rounded-md">Explore More</button>
        </div>
        <div className="lg:w-[50%] w-full sm:p-4 flex justify-center items-center">
            <img className="w-full object-cover" src="https://s3-alpha-sig.figma.com/img/1674/8db2/4d54715f5a9efbe4e0abf224c5fa5484?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CrG41A8HNaO8-YTxEEljrPy652AJ3xkXkXH~Th~RezOv-x7tbnzfAVSXdN~G1wGsqN4qIJfBKUwcfAhdbAufy8EFfBrHo1A1BE30xH4B-GuShuY7tLfAWvoqBfAdDMVasb7-ZxhUfENQMggJqEvWAjTcQwzAVhQhto1FnoI1d5AzTpaUC2kvfCpOuGRKp73bZVOwuOXn3bSYjHRSWklsVWrtrp-6i9FzKp2Bwd8ovVsGHZI3cUCmGRGxyrhRxUZft4r0WHdDOEOQcVfCZKe79frsHKqUnj--x49Yl6ekxbfFponUwVY2H5ltlHoqHLofaK2ivyVBtGirHchxKuAi9w__" alt="" />
        </div>
    </div>
  )
}
