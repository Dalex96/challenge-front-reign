import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { ListNewsByTec } from "../../store/actions";

import '../../dist/css/components/atomo/selectFilter.css'
import AngularIcon from '../../static/icons/angular.png'
import ReactIcon from '../../static/icons/react.png'
import VueIcon from '../../static/icons/vue.png'

function SelectFilter() {
  const activeSession = localStorage.getItem('param')
  const [page, setPage] = useState(0)
	const [tecnology, setTecnology] = useState(activeSession ? activeSession : 'react')
	const dispatch = useDispatch()

  useEffect(() => {
		const activeSession = localStorage.getItem('param')
    setTecnology(activeSession)
		ListNewsByTec(dispatch, tecnology, page) 
  }, []);

	const search = async (e) => {
    // search by tecnology
		localStorage.setItem('param', e.target.id) 
		await ListNewsByTec(dispatch, e.target.id, page)
    setTecnology(e.target.id)
	}

  const openSelect = () => {
    document.querySelector('.custom-select').classList.toggle('open');
  }

  return (
    <div>
    <div className="custom-select-wrapper" onClick={openSelect}>
        <div className="custom-select">
            <div className="custom-select__trigger"><span>{tecnology ? tecnology.charAt(0).toUpperCase() + tecnology.slice(1) : 'Select a tecnology'} </span>
                <div className="arrow"></div>
            </div>
            <div className="custom-options">
                <span className={tecnology === 'angular' ? 'custom-option selected' : 'custom-option'} id="angular" onClick={search} data-value="angular">
                  <img src={AngularIcon} className="iconTec" />
                  Angular
                </span>
                <span className={tecnology === 'react' ? 'custom-option selected' : 'custom-option'} id="react" onClick={search} data-value="react">
                  <img src={ReactIcon} className="iconTec" />
                  React
                </span>
                <span className={tecnology === 'vue' ? 'custom-option selected' : 'custom-option'} id="vue" onClick={search} data-value="vue">
                  <img src={VueIcon} className="iconTec" />
                  Vue
                </span>
            </div>
        </div>
    </div>
    </div>
  );
}

export default SelectFilter
