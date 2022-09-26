import React from "react";


const TourCardTwo = () => {
    return (
        <div className={'p-2 w-1/4 min-w-[200px] max-w-[230px] rounded-md flex flex-col items-center'}>
            <div className="w-7/12">
                <img src='/tour1.jpg' className={'object-cover	w-full h-40	 rounded-md'} />
            </div>
            <div className="font-bold">Hajj</div>
            <div className="mt-1 text-center">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
            </div>
        </div>
    )
}

export default TourCardTwo;