import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import './styles/App.css'


function App() {
  return (
		<div>
			<Header></Header>
			<Outlet></Outlet>
		</div>
  );
}

export default App;
