import { useState } from 'react'
import { useHistory } from "react-router-dom";

import '../../dist/css/components/atomo/btnNav.css'

function BtnNav(props) {
	const history = useHistory()
	const [active, setActive] = useState(history.location.pathname === '/favs' ? false : true)
  
	function activeBtn (patch) {
		active ? setActive(false) : setActive(true)
		history.push(patch)
	}

  return (
    <div className="grid-btn content-btn">
    	<div>
	    	<button className={history.location.pathname === '/' ? 'btn-active' : 'btn-nav'} onClick={ () => !active ? activeBtn('/') : active}>
	    		{ props.titleA}
	    	</button>
    	</div>
    	<div>
	    	<button className={history.location.pathname === '/favs' ? 'btn-active' : 'btn-nav'} onClick={ () => active ? activeBtn('/favs') : active}>
	    		{ props.titleB}
	    	</button>
    	</div>    	
    </div>
  );
}

export default BtnNav;
