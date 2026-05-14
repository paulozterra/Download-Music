import {Bell} from "lucide-react";

const userName = "P"

function Header(){
    return (
        <header className="
            flex flex-row justify-between
            h-20
            px-8
            border-b-2 border-b-[#2d2d4a]
            ">
            <div className="
                flex flex-col justify-center 
                ">
                <h2 className="text-xm font-bold"> Descarga tu música favorita</h2>
                <p className="text-sm text-gray-400 mt-1">
                    Convierte cualquier video de Youtube a MP3 en segundos
                </p>
            </div>
            <div className="
                flex flex-row items-center justify-center  
                gap-3
                " >
                <button className="
                    flex flex-row items-center justify-center 
                    m-auto 
                    w-10
                    h-10
                    text-[#979b94]
                    hover:scale-115
                    hover:text-white
                    " >
                <Bell size={20} strokeWidth={2} />
                </button>
                <div className="
                    flex items-center justify-center  
                    m-auto
                    rounded-[50%]
                    font-bold
                    bg-gradient-to-br from-[#855df3] to-[#0cafd2] 
                    shadow-[0_0_10px_#8b5cf6]
                    w-9 h-9
                    hover:scale-110
                    ">
                    {userName}
                </div>
            </div>
        </header>
    );
};

export default Header;