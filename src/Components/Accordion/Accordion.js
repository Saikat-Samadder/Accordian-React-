//Single Selection
//Multi Selction

import React, { useState } from 'react'
import Data from './Data'
import "./Style.css"

const Accordion = () => {
 
     const[selected,setselected]=useState(null)

     const haldlechange = (getid)=>{
        setselected(selected === getid ? null : getid );
     }

  return (
     <div className="wrapper">
        <button>Enable Multi Selection</button>
        <div className="accordion">
             {
                Data && Data.length > 0 ? (Data.map(Dataitem => (<div className='item'>

                                    <div onClick={()=>haldlechange(Dataitem.id)} className="title">
                                        <h3>{Dataitem.question}</h3>
                                          <span>+</span>
                                        </div>   
                                        {
                                          selected === Dataitem.id ?
                                          <div className="contant">
                                            {Dataitem.answer}
                                          </div>
                                          : null
                                        }           
                </div> ))) : ( <div>No Data</div>) 
             }
        </div>
     </div>
  )
}

export default Accordion
