
function LoginForm(){
    return (

            <form action="" className="
                mt-6 mb-5
                flex flex-col 
            ">
                    <div className="
                        flex flex-col
                        p-2
                        gap-2
                    ">
                        <label htmlFor="" className="
                        text-xs
                        text-[#c4c7ce]
                        font-medium
                        ">Email o usuario
                        </label>

                        <input type="text" 
                        placeholder="tu@email.com"
                        className="
                        p-5
                        h-10
                        bg-[#1e1e35]
                        rounded-lg
                        border-1 border-[#2b2b47]
                        outline-none
                        focus:border-[#8b5cf6]
                        flex items-center justify-center
                        text-[#7C8094] text-xs font-bold
                        " />
                    </div>

                    <div className="
                        flex flex-col
                        p-2
                        gap-2
                    ">
                        <label htmlFor="" className="
                        text-xs
                        font-medium
                        text-[#c4c7ce]
                        ">Contraseña
                        </label>

                        <input type="text" 
                        placeholder="********"
                        className="
                        h-10
                        bg-[#1e1e35]
                        rounded-lg
                        p-5
                        outline-none
                        border-1 border-[#2b2b47]
                        focus:border-[#8b5cf6]
                        flex items-center justify-center
                        text-[#7C8094] text-xs font-bold
                        "/>
                    </div>

                    <div className="
                        flex  justify-between items-center
                        p-2
                        mt-1
                        gap-1">
                        <div className="
                            text-xs
                            text-[#a7aab4]
                            flex gap-1
                        ">
                            <input type="checkbox" />
                            <label htmlFor="">
                                Recuérdame
                            </label>
                        </div>
                        <button className="
                        text-[#0EA2C4]
                        text-xs
                        font-medium
                        hover:underline
                        ">
                            ¿olvidaste tu contraseña?
                        </button>
                    </div>
                    <button className="
                        m-2
                        h-10
                        text-sm
                        text-white
                        font-bold
                        rounded-lg
                        mt-4
                        bg-gradient-to-r 
                        from-[#825df1] 
                        via-[#3d90e2] 
                        to-[#0baed3]
                        hover:from-[#6c46e5] 
                        hover:via-[#4464d0] 
                        hover:to-[#0c8fb4]
                        hover:scale-105
                    "> 
                        Iniciar Sesión
                    </button>
                    
            </form>
    );
}

export default LoginForm;