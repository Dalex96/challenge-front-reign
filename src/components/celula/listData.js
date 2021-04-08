import { useState } from 'react'
import { useSelector } from 'react-redux'

import Card from '../atomo/card'
import Pagination from '../atomo/pagination'
import SelectFilter from '../atomo/selectFilter'
import '../../dist/css/components/celula/listData.css'

function ListData() {
	const [patch, setPatch] = useState('/')
	const StatelistNew = useSelector(state => state.listNews.listNews)

  return (
    <div className="baseList">
     	<SelectFilter/>
     	<div className="grid-list">
     	{
     	StatelistNew.map((element, i) =>
    		<Card key={i} data={element}/>
     		)
     	}
     	</div>
    	<Pagination patch={patch}/>
    </div>
  );
}

export default ListData
