import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { ListNewsFavs } from "../../store/actions";
import Card from '../atomo/card'
import Pagination from '../atomo/pagination'
import '../../dist/css/components/celula/listFavs.css'

function ListFavs() {
	const [patch, setPatch] = useState('/favs')	
	const [page, setPage] = useState(0)
	const StatelistNew = useSelector(state => state.listNews.listFavs)
	const dispatch = useDispatch()

  useEffect(() => {
		const activeSession = localStorage.getItem('param') 
		ListNewsFavs(dispatch, activeSession, page) 
  }, []);

  return (
    <div className="baseList">
     	<div className="grid-list-favs">
     	{
      StatelistNew ?
     	StatelistNew.map((element, i) =>
    		<Card key={i} data={element}/>
     		)
      :
      <center>You have no added favorites</center>
     	}
     	</div>
    	<Pagination patch={patch}/>
    </div>
  );
}

export default ListFavs
