import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ListNewsByTec from '../components/celula/listData';
import Favs from '../components/celula/listFavs';


const Routes = () => {
	return (
		<Switch>
			<Route exact path="/" component={ListNewsByTec} />
			<Route exact path="/favs" component={Favs} />
		</Switch>
	)
}

export default Routes;