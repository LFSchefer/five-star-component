import * as React from "react"
import "./Fivestar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'


const Fivestar = (props) => {
  const [numberOfStar, setNumberOfStar] = React.useState([true,false,false,false,false])
  const [rank, setRank] = React.useState(0)

  const handleClick = (index) => {
    setRank(index)
  }

  const mouseEnter = (index) => {
    setNumberOfStar(prev => {
      const star = [...prev]
      for (let i = 0; i <= 4; i++) {
        i <= index ? star[i] = true : star[i] = false
      }
      return star
    })
  }

  const mouseLeave = (index) => {
    setNumberOfStar(prev => {
      const star = [...prev]
      for (let i = 0; i <= 4; i++) {
        i <= rank ? star[i] = true : star[i] = false
      }
      return star
    })
  }

  const fiveStar = numberOfStar.map((value, index) => {
    return <div className="star" key={index}
    onClick={(event) => handleClick(index, event)}
    onMouseEnter={(event) => mouseEnter(index, event)}
    onMouseLeave={(event) => mouseLeave(index, event)}>
      {value ?
    <FontAwesomeIcon icon={faStar} style={{color: "#ffdd00",}} size="2x"/> :
    <FontAwesomeIcon icon={faStar} style={{color: "#000000"}} size="2x"/>}
    </div>
    });

  return (
    <>
    <div className="five-star">
      <p>Rank :</p>
      {rank + 1}
      {fiveStar}
    </div>
    </>
  )
}

export {Fivestar}
