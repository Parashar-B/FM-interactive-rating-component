export default function ThankYou(props){
    return(
        <div className="w-full h-full  px-[2rem]">
            <div className="h-[35%] flex items-center justify-center ">
                <img
                    alt='img'
                    src={'/images/illustration-thank-you.svg'}
                />
            </div>
            <div className="h-[20%] flex items-center justify-center ">
                <h1 className="bg-[#29323d] w-fit px-[1rem] h-[45%] flex items-center text-[#db7327] text-[0.9rem] rounded-full">You selected {props.submitedRating} out of 5</h1>
            </div>
            <div className="h-[15%] flex items-center justify-center ">
                <h1 className="text-white font-bold text-[25px]">Thank you!</h1>
            </div>
            <div className="h-[35%] ">
                <p className="text-center text-[15px] text-[#959eac] ">
                    We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!
                </p>
            </div>
        </div>
    )
}