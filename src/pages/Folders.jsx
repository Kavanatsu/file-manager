import {useState} from "react";
import FolderList from "../components/FolderList";
import '../styles/App.css'

function Folders() {
	const [folders] = useState([
		{id: 1, name: 'Photos', children: [{id: 2, name:'Photos1', type: 'folder'}, {id: 3, file: {name: 'image', filepath: 'host/uploads/image.png'}, type: 'file'}]},
		{id: 4, name: 'Images', children: []},
		{id: 5, name: 'Files', children: [{id: 6, name:'Photos3', type: 'folder'}]}
	])

  return (
    <div className="Folders">
			<FolderList folders={folders}/>
    </div>
  );
}

export default Folders;