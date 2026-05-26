import {AudioLines} from "lucide-react";
import LoginForm from "./LoginForm";

function LoginCard(){
    return (
        <section className="
         w-[350px]
         bg-[#18182a]
         flex flex-col
         rounded-2xl
         p-4
         border-1 border-[#22223a]">
            <div className="
                mt-2
                flex flex-col justify-center items-center
                
            ">
                <div className="
                    flex items-center justify-center 
                    rounded-lg 
                    w-13 h-13
                    mb-3
                    text-white
                    bg-gradient-to-br 
                        from-[#7241e8] 
                        via-[#3d90e2] 
                        to-[#0baed3] 
                    shadow-[0_0_10px_#8b5cf6]
                    animate-bounce

                    hover:from-[#6c46e5] 
                    hover:via-[#4464d0] 
                    hover:to-[#0c8fb4]
                    ">
                            <AudioLines size={25} strokeWidth={3} />
                    </div>
                <h1 className="
                    text-2xl 
                    font-bold
                    mt-2
                    bg-gradient-to-r 
                        from-[#825df1] 
                        via-[#3d90e2] 
                        to-[#0baed3]
                    bg-clip-text text-transparent
                ">
                    Bienvenido a SoundGrab</h1>
                <p className="
                text-[#7C8094]
                text-xs
                font-medium
                ">
                    Descarga tu musica favorita al instante</p>
            </div>

            <LoginForm/>
            <div className="
                flex justify-center
                text-xs
                gap-2
                mb-2
            ">
                <p className="
                    text-[#a7aab4]
                    font-normal

                ">¿No tienes cuenta?</p>
                <button className="
                    text-[#0EA2C4]
                    text-xs
                    font-medium
                    hover:underline
                ">Crear Cuenta</button>
            </div>

        </section>
    );
}

export default LoginCard;