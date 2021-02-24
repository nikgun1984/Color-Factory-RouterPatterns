import {useHistory, Link} from 'react-router-dom';
import {useState} from 'react';
import './ColorForm.css';

export const ColorForm = ({addColor}) => {
	const history = useHistory();
	const initialValues = {
		text: "",
		color: "#ff00ff"
	};
	const [formData, setFormData] = useState(initialValues);
	const handleChange = (e) => {
		const {name,value} = e.target;
		setFormData((formData)=> ({
			...formData,
			[name]:value
		}));
	}
	const submitForm = (e) => {
		e.preventDefault();
		addColor(formData);
		setFormData(initialValues);
		history.push('/colors');
	}
	return (
		<div className="ColorForm">
			<form onSubmit={submitForm} className="container">
				<label htmlFor="text" className="col-25">
					Name Color
				</label>
				<input
					type="text"
					placeholder="Enter the name of your color"
					id="text"
					name="text"
					className="col-50"
					onChange={handleChange}
					value={formData.text}
					required
				/>
				<br />
				<label htmlFor="color" className="col-25">
					Color
				</label>
				<input
					type="color"
					className="col-50"
					name="color"
					id="color"
					onChange={handleChange}
					value={formData.color}
				/>
				<button>Add this Color</button>
				<button className="ColorForm-btn">
					<Link to="/colors">GO BACK HOME</Link>
				</button>
			</form>
		</div>
	);
}