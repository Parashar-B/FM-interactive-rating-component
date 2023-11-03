export default function Rating(props){
    return(
        <div className="w-full h-full  px-[2rem]">
            <div className="h-[18%] ">
                <div className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-[#333e4d]">
                    <img
                        alt='img'
                        src={'/images/icon-star.svg'}
                    />
                </div>
            </div>
            <div className="h-[40%] ">
                <div className="h-[40%]  flex items-center">
                    <h1 className="text-[25px] font-bold text-white">
                        How did we do?
                    </h1>
                </div>
                <div className="h-[60%]">
                    <p className=" text-left text-[15px] text-[#959eac]">
                        Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
                    </p>
                </div>
            </div>
            <div className="h-[23%]  flex items-center justify-between">
                {
                    [1,2,3,4,5].map((num,index)=>{
                        return(
                            <button key={index} className="w-[50px] h-[50px] bg-[#29323d] rounded-full flex items-center justify-center text-[#959eac] font-semibold">
                                <span>{num}</span>
                            </button>
                        )
                    })
                }
            </div>
            <div className="h-[20%]  flex items-center">
                <button className="bg-[#fb7413] text-white w-full py-[0.5rem] rounded-full">SUBMIT</button>
            </div>
        </div>
    )
}