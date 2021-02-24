import {NavLink} from 'react-router-dom';

export const Colors = ({colors}) => {
	return (
		<div>
			{colors.map((color) => (
				<NavLink key={color.id} exact to={`/colors/${color.text}`}>
					<p>{color.text}</p>
				</NavLink>
			))}
		</div>
	);
}