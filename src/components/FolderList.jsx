
import Folder from "./Folder";

const FolderList = ({folders}) => {
	console.log({folders})
  return (
    <div className="folder-list">
			<h1>Список папок</h1>
			{folders.map(folder =>
				<Folder folder={folder} key={folder.id}/>
			)}	
    </div>
  );
}

export default FolderList;