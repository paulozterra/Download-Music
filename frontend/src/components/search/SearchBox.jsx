import {Download, Link } from "lucide-react"

function SearchBox(){
    return (
        <section className="
        flex flex-col justify-center
        border-1 border-red-300
        h-40
        ">   
            <h3 className="border-1 border-red-150">Pega el enlace de una canción de YouTube</h3>
            <form action="" className="
                border-1 border-red-500
                ">
                <div className="
                    border-1 border-green-600
                    ">
                    <div className="
                        border-1 border-green-700
                        ">
                        <Link/>
                        <input type="text" />
                    </div>
                    
                    <button className="
                        border-1 border-green-800
                        ">
                        <Download/>
                        Descargar
                    </button>
                </div>
            </form>
        </section>
    );
};

export default SearchBox;