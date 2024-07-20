import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button";
import UsernameMenu from "./UsernameMenu";

const MainNav = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    return (
        <span className="flex space-x-2 items-center">
            {isAuthenticated ? (<UsernameMenu />) :
                (<Button
                    variant="ghost"
                    className="text-green-500 font-bold text-xl hover:text-green-600 hover:bg-white"
                    onClick={async () => await loginWithRedirect()}>
                    Log in/ Sign up
                </Button>)}
        </span>
    )
}

export default MainNav;