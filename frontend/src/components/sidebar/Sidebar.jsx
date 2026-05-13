import NavItem from './NavItem';
import { 
    House, 
    History, 
    Heart, 
    Download, 
    MonitorCog,
    AudioLines 
} from "lucide-react";

function Sidebar({currentPage,setCurrentPage}){
    return (
        <aside className="border-r-2 border-r-[#2d2d4a] bg-[#1a1a2e] w-64 min-h-screen flex flex-col gap-2">
            <div className="flex flex-col gap-5">  
                <div className="
                flex flex-row h-25 items-center justify-center gap-3
                ">
                    <div className="
                    flex items-center justify-center 
                    rounded-lg 
                    bg-gradient-to-br from-[#8064f3] to-[#18aad8] 
                    hover:from-[#6c45e5] 
                    hover:to-[#1786b9] 
                    shadow-[0_0_10px_#8b5cf6]
                    hover:shadow-[0_0_15px_#5918F0]
                    ">
                        <div className="w-11 h-11 bg-[] flex items-center justify-center">
                            <AudioLines size={23} strokeWidth={3} />
                        </div>
                    </div>
                    <h1 className="
                    text-xl font-bold 
                    bg-gradient-to-r
                    from-[#8064f3]
                    to-[#18aad8]
                    bg-clip-text
                    text-transparent
                    ">
                        SoundGrab
                    </h1>
                </div>
                <nav className="
                border-1 border-blue-500
                flex flex-col justify-center
                py-3
                gap-1.5
                ">
                    <NavItem 
                        label = "Inicio"
                        icon = {House }
                        page = "home"
                        currentPage = {currentPage}
                        setCurrentPage = {setCurrentPage}
                    />
                    <NavItem
                        label = "Historial"
                        icon = {History}
                        page = "history"
                        currentPage = {currentPage}
                        setCurrentPage = {setCurrentPage}
                    />
                    <NavItem
                        label = "Favoritos"
                        icon = {Heart}
                        page = "favorites"
                        currentPage = {currentPage}
                        setCurrentPage = {setCurrentPage}
                    />
                    <NavItem
                        label = "Descargas"
                        icon = {Download}
                        page = "downloads"
                        currentPage = {currentPage}
                        setCurrentPage = {setCurrentPage}
                    />
                    <NavItem
                        label = "Configuración"
                        icon = {MonitorCog}
                        page = "configuration"
                        currentPage = {currentPage}
                        setCurrentPage = {setCurrentPage}
                    />

                </nav>
            </div>
        </aside>
    );
}

export default Sidebar;