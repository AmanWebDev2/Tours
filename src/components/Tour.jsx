import React, { useState } from 'react'

function Tour({id,name,info,price,image,removeTour}) {
const [readMore,setReadMore] = useState(false);
    
  return (
    <article>
        <img src={image} alt="tour-img" />
        <footer>
            <div className='tour-info'>
                <h4>{name}</h4>
                <h4 className="price">${price}</h4>
            </div>
            <p>
                {readMore ? info : `${info.substring(0,200)}...`}
                <button className='toggle-read-more' onClick={()=>setReadMore(!readMore)}>
                    {readMore ? "Read Less":"Read More"}
                </button>
            </p>
            <button className='delete-btn' onClick={()=>removeTour(id)}>not interested</button>
        </footer>
    </article>
  )
}

export default Tour