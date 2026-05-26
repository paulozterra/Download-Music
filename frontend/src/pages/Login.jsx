import LoginCard from "../components/login/LoginCard";

function Login(){
    return(
        <main className="
            relative
            min-h-screen
            bg-[#0d0d1a]
            flex items-center justify-center
            overflow-hidden
        ">
            <div className="
                absolute
                left-[10%]
                top-[18%]
                w-[200px]
                h-[200px]
                rounded-full
                bg-[#8b5cf6]/20
                blur-[130px]
                animate-pulse
            "/>
            <div className="
                absolute
                right-[10%]
                bottom-[18%]
                w-[200px]
                h-[200px]
                rounded-full
                bg-[#18aad8]/20
                blur-[130px]
                animate-pulse
            "/>
            <LoginCard/>
        </main>
    );
}

export default Login