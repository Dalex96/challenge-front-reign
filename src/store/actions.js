import axios from 'axios'
import { 
	LIST_NEWS_BY_TECNOLOGY, 
	LIST_FAVS,
 } from "./actionTypes";

const baseURL = 'https://hn.algolia.com/api/v1/search_by_date?query='

export const ListNewsByTec = (dispatch, tec, page) => {
	axios.get(`${baseURL}${tec}&page=${page}`)
		.then((res) => {
			dispatch({
				type: LIST_NEWS_BY_TECNOLOGY,
				payload: res.data.hits
			})
		})
}

export const ListNewsFavs = (dispatch) => {
	const activeSession = localStorage.getItem('fav')
	const favsJson = JSON.parse(activeSession)
	console.log(favsJson)
	dispatch({
		type: LIST_FAVS,
		payload: favsJson
	})
}
