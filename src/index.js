import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from "react-router-dom";
import router from "./routes.jsx";
import Store from './store/store.js';

const store = new Store();

export const Context = createContext({
	store,
})

ReactDOM.createRoot(document.getElementById("root")).render(
	<Context.Provider value={{store}}>
    <RouterProvider router={router}/>
	</Context.Provider>
);