import { useState } from "react";
import RatingInput from "./RatingInput";
import ThankYou from "./ThankYou";

export default function InteractiveRating(){

    const [submited, setSubmited] = useState(false);

    return(
        <div className="flex justify-center items-center h-[100vh] bg-[#121417] font-overPass">
            <div className="w-[25rem] h-[26rem] flex rounded-[30px] bg-gradient-to-b from-[#252d37] to-[#1f252e] py-[2rem]">
                {
                    submited ? <ThankYou/> : <RatingInput stateHandler={setSubmited}/> 
                }
            </div>
        </div>
    )
}