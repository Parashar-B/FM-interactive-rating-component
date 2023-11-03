import { useState } from "react";
import RatingInput from "./RatingInput";
import ThankYou from "./ThankYou";

export default function InteractiveRating(){

    const [submited, setSubmited] = useState(false);
    const [rating, setRating] = useState(0);
    console.log(submited)

    return(
        <div className="flex justify-center items-center h-[100vh] bg-[#121417] font-overPass">
            <div className="w-[25rem] h-[26rem] flex rounded-[30px] bg-gradient-to-b from-[#252d37] to-[#15191e] py-[2rem]">
                {
                    submited ? <ThankYou submitedRating={rating}/> : <RatingInput submitHandler={setSubmited} rootRatingHandler={setRating}/> 
                }
            </div>
        </div>
    )
}