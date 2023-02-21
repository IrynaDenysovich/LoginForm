import {useSelector, useDispatch} from "react-redux";
import { LogOut } from "redux/userSlice";

export const UserMenu =()=>{
 
    const dispatch= useDispatch();
    const login = useSelector(state=> state.user.login)

    return(
        <div>
            {login}
            <button type="button" onClick={()=> dispatch(LogOut()) }>Log out</button>
         </div>
    );
};