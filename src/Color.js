import "./Color.css";
import { Link, useParams, Redirect } from "react-router-dom";
import validateColor from "validate-color";

export const Color = () => {
	const { color } = useParams();
	return validateColor(color) ? (
		<div style={{ backgroundColor: color }} className="Color">
			<h1>THIS IS {color.toUpperCase()}</h1>
			<h1 className="Color-center">ISN'T IT BEAUTIFUL</h1>
			<h1 className="Color-bottom">
				<Link to="/colors">GO BACK HOME</Link>
			</h1>
		</div>
	) : (
		<Redirect to="/color" />
	);
};
