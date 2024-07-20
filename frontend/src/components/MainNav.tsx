import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button";

const MainNav = () => {
    const { loginWithRedirect } = useAuth0();


    return (
        <Button
            variant="ghost"
            className="text-green-500 font-bold text-xl hover:text-green-600 hover:bg-white"
            onClick={async () => await loginWithRedirect()}>
            Log in/ Sign up
        </Button>
    )
}

export default MainNav;