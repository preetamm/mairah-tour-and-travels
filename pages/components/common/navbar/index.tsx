import React from "react";

const Navbar = () => {
    return (
        <div className={'flex items-center w-full h-16 bg-transparent fixed top-0 '}>
            <div className={'mr-auto'}>logo</div>
            <div className={'flex items-center gap-8 '}>
                <div>About Us</div>
                <div>Hajj</div>
                <div>About Us</div>
                <div>Tours</div>
                <div>
                    <div className={"border-solid border-2 border-white px-3 py-1 rounded-full flex items-center"}>Contact Us</div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
