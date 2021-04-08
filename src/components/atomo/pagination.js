import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { ListNewsByTec } from "../../store/actions";
import '../../dist/css/components/atomo/pagination.css'
import arrowRight from '../../static/icons/arrowRight.svg'
import arrowLeft from '../../static/icons/arrowLeft.svg'

function Pagination() {
	const [index, setIndex] = useState(0)
	const [cant, setCant] = useState([1,2,3,4,5])
	const dispatch = useDispatch()

	async function activeBtn (e) {
		setIndex(parseInt(e.target.id))
		const activeSession = localStorage.getItem('param')
		await ListNewsByTec(dispatch, activeSession, e.target.id)	
	}

	async function next ()  {
		setIndex(index+1)
		if(index+1 >= cant.length){
			var newArray = cant
			newArray.push(index+1)
			setCant(newArray)
		}
		const activeSession = localStorage.getItem('param')
		await ListNewsByTec(dispatch, activeSession, index+1)
	}

	async function prev () {
		setIndex(index === 0 ? index : index-1)
		const activeSession = localStorage.getItem('param')
		await ListNewsByTec(dispatch, activeSession, index-1)
	}

  return (
    <div className="container container-pagination">
    	<button className="btn" onClick={prev}>
				<img src={arrowLeft} className="positionImgLeft" width="30"/>
    	</button>
    	{
    		cant.map((cant, i) =>
    			index === i ?
    				<button id={i} key={i} className='btn btn-pagination-active' onClick={activeBtn}>{i+1}</button>
    			:
    				<button id={i} key={i} className='btn' onClick={activeBtn}>{i+1}</button>
    		)
    	}
    	<button className="btn" onClick={next}>
    		<img src={arrowRight} className="positionImgRight" width="30"/>
    	</button>
    </div>
  );
}

export default Pagination;
