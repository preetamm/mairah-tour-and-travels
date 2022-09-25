
const ServiceCard = () => {
    return (
        <div className="flex w-[45%] items-center gap-2 ">
            <div className="w-[34px] h-[34px] rounded-full"><img src='/tour1.jpg' className="rounded-full object-fit w-full h-full"></img></div>
            <div className="flex-1">
                <div className="text-sm font-semibold">Hujj And Urmah Packages</div>
                <div className="text-[12px]">Hasle free best packages</div>
            </div>
        </div>
    )
}

export default ServiceCard;