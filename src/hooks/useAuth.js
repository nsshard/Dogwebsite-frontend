import { useContext } from "react";
import AuthContext from "../backend/context/AuthProvider";
/**
 * Auth router
 * 
 */
const useAuth = () => {
    return useContext(AuthContext);
}

export default useAuth;