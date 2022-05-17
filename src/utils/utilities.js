import './utils.css'
export const ProductCard = (props)=>{
    return (
        <li className="card_wrapper">
                <div className='img_wrapper'> <img src={props.src}/></div>
                <div className='about_wrapper'>

                    <div className='card_about'> {props.about}</div>
                    <div className='card_price'> {props.price}</div>
                </div>
        </li>
    )
}