import * as React from "react"
import "./Fivestar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'


const Fivestar = (props) => {
  const [numberOfStar, setNumberOfStar] = React.useState([false,false,false,false,false])

  const handleClick = (index) => {

    setNumberOfStar(prev => {
      const star = [...prev]
      for (let i = 0; i <= 4; i++) {
        i <= index ? star[i] = true : star[i] = false
      }
      return star
    })
  }

  const fiveStar = numberOfStar.map((value, index) => {
    return <div className="star" key={index} onClick={(event) => handleClick(index, event)}>
      {value ?
    <FontAwesomeIcon icon={faStar} style={{color: "#ffdd00",}} size="2x"/> :
    <FontAwesomeIcon icon={faStar} style={{color: "#000000"}} size="2x"/>}
    </div>
    });

  return (
    <>
    <div className="five-star">
      {fiveStar}
    </div>
    </>
  )
}

export {Fivestar}
