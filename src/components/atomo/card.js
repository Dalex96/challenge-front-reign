import { useState, useEffect } from 'react'
import '../../dist/css/components/atomo/card.css'
import corazon from '../../static/icons/corazon.svg'
import corazonVacio from '../../static/icons/corazon_vacio.svg'
import watch from '../../static/icons/watch.svg'

function Card(props) {
  const [iconActive, setIconActive] = useState(false)

  useEffect(() => {

  }, []);

  function iconActiveF (e) {
    iconActive ? setIconActive(false) : setIconActive(true)
    favorite()
  }

  const favorite = () => {
    var datos = props.data
    var favoritos = localStorage.getItem("fav") || "[]"
    favoritos = JSON.parse(favoritos)
    var posLista = favoritos.findIndex((e) => { return e.objectID === datos.objectID; })
    if (posLista > -1) {
      favoritos.splice(posLista, 1)
    } else {
      favoritos.push(datos)
    }
    localStorage.setItem("fav", JSON.stringify(favoritos))
  }

  const listFavorites = () => {
    var favoritos = localStorage.getItem("fav") || "[]";
    var favorites = JSON.parse(favoritos)
    favorites.map( favo => {
      if(props.objectID === favo.objectID){
        this.setState({favoCard: true})
      }

    })
  }

  const drawIconFav = (id) => {
    var favoritos = localStorage.getItem("fav") || "[]"
    favoritos = JSON.parse(favoritos)
    var posLista = favoritos.findIndex((e) => { return e.objectID === id; })
      console.log(posLista)
    if (posLista > -1) {
      return (
        <img src={corazon} className="positionIconBtn" width="30"/>
      )
    } else {
      return (
        <img src={corazonVacio} className="positionIconBtn" width="30"/>
      )
    }        
  }

  return (
    <div>
    	<div className="card">
    		<div className="grid-card">
    			<a href={props.data.story_url ? props.data.story_url : props.data.url} target="__blank" className="linkCad">
    			<div>
		    		<div className="card-header">
              <img src={watch} className="iconTitleCard" width="15"/>
		    			<span>{props.data.created_at} by {props.data.author}</span>
		    		</div>
		    		<div className="card-content">
            {
              props.data.story_title || props.data.title ?
              <p>{props.data.story_title ? props.data.story_title : props.data.title}</p>
              :
		    			<p>Title not found</p>
            }
		    		</div>
    			</div>
    			</a>
	    		<div className="card-actions">
            <a href="javascript:void(0)" className="linkCad" id={props.data.objectID} onClick={iconActiveF}>
              {
                drawIconFav(props.data.objectID)
              }
            </a>
	    		</div>
    		</div>
    	</div>
    </div>
  );
}

export default Card;
