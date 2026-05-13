function NavItem({
    label, 
    icon: Icon, 
    page, 
    currentPage, 
    setCurrentPage}){

    const isActive = currentPage === page;

    return (
        <button
            onClick={() => setCurrentPage(page)}
            className="
                 
                flex items-center gap-1
                h-12 
                "
        >
        <Icon className=" m-4 border-1 border-yellow-500" size={23} strokeWidth={1.5}/>
        <span className=" border-1 border-yellow-700" >{label}</span>
        </button>
    );
}

export default NavItem;