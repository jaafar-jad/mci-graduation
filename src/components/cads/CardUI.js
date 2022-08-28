import React from 'react'

const card=props => {
  return (
<div className='card text-center shadow'>
    <div className='overflow'>
        <img src={props.imgsrc} alt='jaf' className='card-img-top'/>
    </div>
    <div className='card-body text-dark'>
        <h4 className='card-title'>{props.title}</h4>
        <p className='card-text text-secondary'>lorem ipsun dolor sit amet consecteture ipisn elit</p>
       
    </div>
</div>
  )
}

export default card;