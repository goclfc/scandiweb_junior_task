import './utils.css'
export const ProductCard = (props)=>{
    return (
        <div className="card_wrapper">
            <div className='card-item'> 
                <div className='img_wrapper'> <img src={props.src}/></div>
                <div className='about_wrapper'>

                    <div className='card_about'> {props.about}</div>
                    <div className='card_price'> {props.price}</div>
                </div>
            </div>
        </div>
    )
}