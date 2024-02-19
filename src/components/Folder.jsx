import Button from "./UI/Button";
import ModalWindow from "./Modal/ModalWindow";
import Form from "./UI/Form";
import Input from "./UI/Input";
import { useState } from "react";

const Folder = ({folders}) => {
	const [parentId, setParentId] = useState('');
	const [name, setName] = useState('');
	const [modal, setModal] = useState(false);

  return (
    <div className="folder">
			<ul>
				<li>{folders.id} {folders.name==="root" ? 'Корневая папка' : folders.name}
					<Button onClick={() => setModal(true)}>Создать папку</Button>
					<Button>Создать файл</Button>
					<Button>Изменить папку</Button>
					<Button>Удалить папку</Button>
					<ModalWindow visible={modal} setVisible={setModal}>
						<Form>
							<Input
								onChange={e => setParentId(e.target.value)}
								value={parentId}
								label="ID родителя" 
								type='text'
								id='parentId'/>
							<Input
								onChange={e => setName(e.target.value)}
								value={name}
								label="Название папки" 
								type='text'
								id='name'/>
							<Button>Создать</Button>
						</Form>
					</ModalWindow>
				</li>
				{ folders.children==='' ? 
					<>		
					</> :
					<>
						<li>
						{folders.children.map(child =>
							<ul child={child} key={child.id}>
								<li>{child.id} {child.file ? child.file.name : child.name}</li>
							</ul>
						)}
						</li>
					</>
				}			
			</ul>		
    </div>
  );
}

export default Folder;