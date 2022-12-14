import React from "react";


const TourCardOne = () => {
    return (
        <div className={'p-2 w-1/4 min-w-[170px] max-w-[200px] rounded-md'} style={{ boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px' }}>
            <div className="w-full">
                <img src='/tour1.jpg' className={'object-cover	w-full h-32 rounded-md	'} />
            </div>
            <div className="text-[#D1C448] font-">Classic</div>
            <div className="font-bold">Hajj</div>
            <div className="mt-1">package duration (45-50)days</div>
        </div>
    )
}

export default TourCardOne;