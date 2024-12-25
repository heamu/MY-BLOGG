import { SignIn } from "@clerk/clerk-react";

const Loginpage = ()=>{

    return (
        <div className="flex items-center justify-center h-[calc(100vh-80px)]">
            <SignIn signUpUrl="/Register"/>
        </div>
    );
}
export default Loginpage