import React from 'react'
import { IMG_URL } from '../../config.js'
import Percentage from '../../assets/percentage.png'
const Bcard = (props) => {
    return (
        <div className="card">
            <img src={IMG_URL + props.d.data.cloudinaryImageId} alt="card" className='cardImg' />

            <p className='name'> {props.d.data.name}</p>
            <p className='location'>{props.d.data.cuisines[0] + ", "}{props.d.data.cuisines[1]} </p>
            <div className="inline">
                <p className='rating'>{props.d.data.totalRatingsString}</p>
                <p className='deliveryTime'>{props.d.data.deliveryTime + " MINS"}</p>
                <p className='cost'>{props.d.data.costForTwoString}</p>
            </div>
            <hr />
            <div className="iconbottom">
                <img src={Percentage} alt="Percentage" className='Percentage'/>
                <p className='discount'> {props.d.data.aggregatedDiscountInfo.header}</p>
            </div>
        </div>
    )
}
// const Bcard = ({data}) => {
//     return (
//         <div className="card">
//         <img src={IMG_URL+data.cloudinaryImageId} alt="card" className='cardImg' />

//         <p> {data.name}</p>
//         <p>{data.cuisines[0]+", "}{data.cuisines[1]} </p>
//         <p>{data.totalRatingsString}</p>
//         <p>{data.deliveryTime+" MINS"}</p>
//         <p>{data.costForTwoString}</p>
//         <hr />
//         <p> {data.aggregatedDiscountInfo.header}</p>

//          </div>
//     )
// }

export default Bcard