 import { useState, useRef } from "react";
 import { apiFetch } from "../../services/fetchClient";
 import { useNavigate } from "react-router-dom";

function LoginForm(){
    const [email, setEmail] =  useState("");
    const [password, setPassword] =  useState("");
    const [remember, setRemember] = useState(false);
    const [emailError,setEmailError] = useState(false);
    const [focusEmail, setFocusEmail] = useState(true);
    const [focusPassword, setFocusPassword] = useState(false);
    
    const inputEmailRef = useRef(null); 
    const inputPasswordRef = useRef(null); 
    const rememberRef = useRef(null);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const navigate = useNavigate();

    const handleSubmit = async (event) =>{
        event.preventDefault();

        console.log("Email:", email);
        console.log("Password:", password);
        console.log("remember:", remember);
        console.log("emailError",emailError);

        try{
            const data = await apiFetch(
                "/auth/login",
                {
                    method: "POST",
                    body: JSON.stringify({
                        email,
                        password
                    })
                }
            )
            navigate("/home");
        }
        catch(error){
            console.error(error);
        }
        
    };

    return (

            <form onSubmit={handleSubmit} action="" noValidate className="
                mt-6 mb-5
                flex flex-col 
                text-white
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

                        <input 
                        required
                        value = {email}  
                        onFocus={()=>setFocusEmail(true)}
                        onBlur={()=>setFocusEmail(false)}
                        onChange={(e) =>{
                            setEmail(e.target.value);
                            console.log(emailRegex.test(e.target.value));
                            
                            if(emailRegex.test(e.target.value)){
                                setEmailError(false);
                            }
                            else{
                                setEmailError(true);
                            }
                            
                        } }
                        ref={inputEmailRef}
                        placeholder="tu@email.com"
                        className={`
                            p-5
                            h-10
                            bg-[#1e1e35]
                            rounded-lg
                            outline-none
                            focus:border-[#8b5cf6]
                            flex items-center justify-center
                            text-xs font-bold
                            ${
                                (!focusEmail && emailError) //|| !focusEmail
                                ?"border-2 border-[#ff4d9d] text-[#ff4d9d]"
                                :"border-1 border-[#2b2b47] text-[#7C8094]"
                                
                            }
                            `
                        }                           
                        type="email" />
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

                        <input type="password" 
                        required
                        value = {password}
                        onFocus={()=>setFocusPassword(true)}
                        onBlur={()=>setFocusPassword(false)}
                        onChange={(e) => setPassword(e.target.value)}
                        ref={inputPasswordRef}
                        placeholder="********"
                        className={`
                            h-10
                            bg-[#1e1e35]
                            rounded-lg
                            p-5
                            outline-none
                            focus:border-[#8b5cf6]
                            flex items-center justify-center
                            text-xs font-bold
                             ${
                                !focusPassword && inputPasswordRef.current?.value=== ""
                                ?"border-2 border-[#ff4d9d] text-[#ff4d9d]"
                                :"border-1 border-[#2b2b47] text-[#7C8094]"
                            }
                            `
                        }/>
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
                            <input type="checkbox" 
                            checked = {remember}
                            onChange={(e)=> setRemember(e.target.checked)}
                            ref = {rememberRef}
                            />
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
                    <button type="submit"
                    className="
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