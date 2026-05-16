import {Download, Link } from "lucide-react"
import { useState, useRef, useEffect  } from "react";


function SearchBox(){
    const [focus,setFocus] = useState(false);
    const [hasError,setHasError] = useState(false);
    const [url, setUrl] = useState("");
    const inputRef = useRef(null);
    const [placeholder,setPlaceholder] = useState("Pega un link de Youtube para empezar a descargar")

    useEffect(() => {
    console.log("Cambió:", hasError);
    }, [hasError]);

    return (
        <section className="
        flex flex-col justify-center 
        bg-[#1a1a2e] shadow-[0_0_25px_rgba(139,92,246,0.25)]
        rounded-2xl border border-[#2d2d4a]
        p-8 h-40
        ">   
            <h3 className="
                mb-3
                font-bold
                ">
                    Pega el enlace de una canción de YouTube
            </h3>
            <form action="" >
                <div className="
                    flex
                    justify-between
                    gap-3
                    ">
                    <div className={
                    `
                        flex items-center justify-center
                        flex-1
                        rounded-lg
                        border-1 border-[#2c2c49]
                        h-10
                        gap-3 px-4 bg-[#252540]

                        ${
                            hasError
                            ? "border-2 border-[#ff4d9d] text-[#ff4d9d]"
                            : focus
                                ? "border-2 border-[#8b5cf6]"
                                : "border border-[#2c2c49]"
                        }
                    `
                    }>
                        <Link size={20}  className={`
                        text-[#928f89]
                            ${
                                hasError
                                ? "text-[#ff4d9d]"
                                : ""
                            }
                        `
                        }
                    
                        />
                        <input 
                        required
                        ref={inputRef}
                        className="
                            w-full
                            border-transparent
                            text-sm
                            outline-none
                        " 
                        onFocus={() => setFocus(true)}
                        onBlur={() => setFocus(false)}
                        placeholder={placeholder} 
                        type="url" />
                    </div>
                    
                    <button className="
                        px-8
                        rounded-lg
                        flex items-center 
                        gap-3
                        text-sm font-bold
                        bg-gradient-to-r
                        from-[#7c67f2]
                        to-[#14acd7]
                        hover:from-[#6c45e5] 
                        hover:to-[#1786b9] 
                        hover:scale-105
                        transition-all duration-500 ease-in-out
                        "
                        onClick={()=>{
                            console.log(inputRef.current.validity.valid);
                            if(inputRef.current.validity.valid === false){

                                setHasError(true);
                                setPlaceholder("Ingresa una URL válida"); 

                                setTimeout(()=>{

                                    setHasError(false);
                                    setPlaceholder("Pega un link de Youtube para empezar a descargar");

                                 },3000);
                            }

                        }}
                        >
                        <Download size={20} strokeWidth={2.5}/>
                        Descargar
                    </button>
                </div>
            </form>
        </section>
    );
};

export default SearchBox;