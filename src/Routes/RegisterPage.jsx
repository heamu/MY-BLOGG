import { SignUp } from "@clerk/clerk-react";

const Registerpage = ()=>{

    return (
        <div className="flex items-center justify-center h-[calc(100vh-80px)]">
            <SignUp signInUrl="/Login"/>
        </div>
    );
}
export default Registerpage