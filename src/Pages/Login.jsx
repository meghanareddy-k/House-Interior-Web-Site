import React, { useContext, useState } from "react";
import { ACTIONS , COMPONENTS} from "../utils/constants";
import { StateContext } from "../components/App";
import { fetchLogin } from "../api/fetchAPICalls";
import "../components/App.css";
import Status from "../components/Status";

function Login() {
  const [state, dispatch] = useContext(StateContext);
  const [username, setUsername] = useState("");

  function handleLogin(event) {
    event.preventDefault();
  
      fetchLogin(username).then(({ userData }) => {
        dispatch({ type: ACTIONS.PENDING  });
        setTimeout(() => {
          
          dispatch({ type: ACTIONS.LOG_IN, username: userData.username });
          dispatch({ type: ACTIONS.REPLACE_BAG, cart: userData.cart });
          dispatch({type: ACTIONS.SET_COMPONENT, activeComponent: COMPONENTS.HOME})
          dispatch({
            type: ACTIONS.REPLACE_WISHLIST,
            wishList: userData.wishList,
          });

        }, 2000);

      }).catch((err) => {
        dispatch({ type: ACTIONS.REPORT_ERROR, error: err?.error });
      });

  }

  function handleChange(event) {
    setUsername(event.target.value);
  }

  return (
    <div className="login-form-content"> 
      <h2> Heavenly Interior </h2> 
      <form className="login-form" action="#/login" method="POST" onSubmit={handleLogin}>
        
        <input className="to-send" type="text" name="username" onChange={handleChange} placeholder = "Enter Username" value={username}/>
        <button className="btn-submit" type="submit">
        Login
        </button>
        {state.error && <Status error={state.error} />}
      </form>
    </div>
  );
}

export default Login;
