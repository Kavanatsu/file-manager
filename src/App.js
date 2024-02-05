import React, {useState} from "react";
import Header from "./components/Header";
import './styles/App.css'
import FolderList from "./components/FolderList";

function App() {
	const [folders] = useState([
		{id: 1, name: 'Photos', children: [{id: 2, name:'Photos1', type: 'folder'}, {id: 3, file: {name: 'image', filepath: 'host/uploads/image.png'}, type: 'file'}]},
		{id: 4, name: 'Images', children: []},
		{id: 5, name: 'Files', children: [{id: 6, name:'Photos3', type: 'folder'}]}
	])

  return (
    <div className="App">
			<Header/>
			<FolderList folders={folders}/>
    </div>
  );
}

export default App;
