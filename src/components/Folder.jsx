import React from "react";

const Folder = ({folder}) => {
  return (
    <div className="folder">
			<ul>
				<li>{folder.id} {folder.name}</li>
				<li>
					{folder.children.map(child =>
						<ul child={child} key={child.id}>
							<li>{child.id} {child.file ? child.file.name : child.name}</li>
						</ul>
					)}
				</li>
			</ul>
				
    </div>
  );
}

export default Folder;