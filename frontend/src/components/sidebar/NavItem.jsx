function NavItem({
    label, 
    icon: Icon, 
    page, 
    currentPage, 
    setCurrentPage}){

    const isActive = currentPage === page;

    return (
        <button
            onClick={
                () => {setCurrentPage(page)
                     
                }
            }
            className={`
                flex items-center gap-0.5
                w-[90%]
                h-10 
                rounded-lg
                border-l-3
                mx-auto 
                ${
                    isActive
                    ? "bg-[#2b244c] border-l-3 border-l-[#8b5cf6] text-white"
                    : "border-l-3 border-l-transparent hover:bg-[#252042]"
                }`              
                }
        >
        <Icon className=" m-4 " size={16} strokeWidth={1.5}/>
        <span className=" text-xm" >{label}</span>
        </button>
    );
}

export default NavItem;