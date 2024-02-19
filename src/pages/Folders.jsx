import {useContext, useEffect} from "react";
import '../styles/App.css'
import { Context } from '../index';
import { Link } from "react-router-dom";
import FolderList from '../components/FolderList'
import { observer } from "mobx-react-lite";

const Folders = observer (() => {
	const {store} = useContext(Context);

	useEffect(() => {
		store.fetchFolder('root');
	}, [store])

  return (
    <div className="folders">
			<h1>Список папок</h1>
			{store.token ? 
			<> 
				<FolderList folders={store.folders}/>
			</> : 
			<><Link to="/auth">Авторизуйтесь, чтобы начать работу</Link></>}
			<br/>
			
    </div>
  );
})

export default Folders;