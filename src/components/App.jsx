import { createContext, useEffect, useReducer } from "react";
import "./App.css";
import Login from "../Pages/Login";
import { reducer } from "../state/reducer";
// import { initialState } from "../state/state";
import {
  LOGIN_STATUS,
  COMPONENTS,
  ACTIONS,
  SERVER,
  CLIENT,
} from "../utils/constants";
import Loading from "./Loading";
//import Categories from "./Categories";
import ShopByType from "../Pages/ShopByType";
import Home from "./Home";
import Products from "../Pages/Products";
import Product from "./Product";
import Bag from "../Pages/Bag";
import Checkout from "../Pages/Checkout";
import Dashboard from "./Dashboard";
import Footer from "./Footer";
import { fetchSession } from "../api/fetchAPICalls";
import { fetchCartData } from "../api/fetchAPICalls";

export const StateContext = createContext();

export const initialState = {
  username: "",
  loginStatus: LOGIN_STATUS.NOT_LOGGED_IN,
  cart: [],
  checkoutItems: [],
  wishList: [],
  searchInput: "",
  error: "",
  activeComponent: COMPONENTS.HOME,
  activeCategory: "",
  activeProductData: {},
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    fetchSession()
      .then((session) => {
        dispatch({ type: ACTIONS.LOG_IN, username: session.username });
        fetchCartData().then(({cart}) => {
          dispatch({ type: ACTIONS.REPLACE_BAG, cart });
        });
      })
      .catch((err) => {
        if (err?.error === SERVER.AUTH_MISSING) {
          return Promise.reject({ error: CLIENT.NO_SESSION });
        }
        else if (err?.error === CLIENT.NO_SESSION) {
          dispatch({ type: ACTIONS.LOG_OUT });
        }
      })
  }, []);

  function renderComponents() {
    switch (state.activeComponent) {
      case COMPONENTS.HOME:
        return <Home />;

      case COMPONENTS.CATEGORIES:
        return <ShopByType />;

      case COMPONENTS.PRODUCTS:
        return <Products />;

      case COMPONENTS.PRODUCT:
        return <Product />;

      case COMPONENTS.CART:
        return <Bag />;

      case COMPONENTS.CHECKOUT:
        return <Checkout />;

      default:
        return <Home />;
    }
  }

  return (
    <StateContext.Provider value={[state, dispatch]}>
      <div className="App">
        {(state.loginStatus === LOGIN_STATUS.NOT_LOGGED_IN && <Login />) ||
          (state.loginStatus === LOGIN_STATUS.PENDING &&  <Loading className="login__waiting gg-spinner-two-alt" username={state.username}></Loading>) ||
          (state.loginStatus === LOGIN_STATUS.IS_LOGGED_IN && (
            <div className="home">
              <Dashboard />
              {
              renderComponents()
              }
              <Footer />
            </div>
          ))}
      </div>
    </StateContext.Provider>
  );
}

export default App;
