/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import '../../styles/rentalCard.scss'


function RentalCard({id, title, cover}) {

    return (
      <li className='rentalCard'>
        <Link to={`/rental/${id}`}>
            <img className="rentalCard_img" src={cover} alt="image de la location" />
        </Link>
        <span className="rentalCrad_title">{title}</span>
      </li>
    )
      
  }
  
  export default RentalCard
  