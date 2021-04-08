import { LIST_NEWS_BY_TECNOLOGY, LIST_FAVS } from "../actionTypes";

const initialState = {
	listNews: [],
	listFavs: []
}

export function  listNews(state = initialState, action){
	switch(action.type){
		case LIST_NEWS_BY_TECNOLOGY:
			return Object.assign({}, state, {listNews: action.payload})
		case LIST_FAVS:
			return Object.assign({}, state, {listFavs: action.payload})			
		default: return state
	}
}
