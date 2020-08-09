import React, { useLayoutEffect } from 'react'

const GifList = (props) =>
{
  return( 
    <div className="pull-left">
      <ul>
        {props.gifURLS.map(url => {
            return (
                <li className="gif-li">
                  <img  className="gif-img" src={url} alt="" />
                </li>
              ) 
          })}
      </ul>
    </div>
  )

}

export default GifList;