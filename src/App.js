import './App.css';
import {BrowserRouter as Router,Route,Redirect, Switch} from 'react-router-dom';
import {useState} from 'react';
import { v4 as uuid } from "uuid";
import { Colors } from "./Colors";
import { Color } from "./Color";
import { ColorForm } from "./ColorForm";
import NavBar from "./NavBar";

function App() {
  const defaultColors = [
		{ text: "red", color: "#FF0000",id: uuid() },
		{text: "green",color:"#11FF00", id:uuid()},
		{text:"blue",color:"#0037FF",id:uuid()}
	];
  const [colors, setColors] = useState(defaultColors);
	const addColor = (color) => {
		const newColor = {...color,id:uuid()};
		setColors((colors) => [newColor,...colors]);
	};
  return (
		<div className="App">
			<Router>
				<Switch>
					<Route exact path="/colors/new">
						<ColorForm colors={colors} addColor={addColor}/>
					</Route>
					<Route exact path="/colors/:color">
						<Color />
					</Route>
					<Route exact path="/colors/">
						<NavBar />
						<Colors colors={colors}/>
					</Route>
					<Redirect to="/colors" />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
