import React from 'react'
import './possibility.css'
import { possibility } from '../../assets'

export default function Possibility() {
  return (
    <div className="gpt3__possibility-container">
      <div className="gpt3__possibility-container-pic">
        <img src={possibility} alt="possibility"/>
      </div>

      <div className="gpt3__possibility-container-text">
        <div className="gpt3__possibility-container-space">
        </div>
        <div className="gpt3__possibility-container-text__row1">
        Request Early Access to Get Started
        </div>
        <div className="gpt3__possibility-container-text__row2 gradient__text">
        The possibilities are beyond your imagination
        </div>
        <div className="gpt3__possibility-container-text__row3">
        Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
        </div>
        <div className="gpt3__possibility-container-text__row4">
        Request Early Access to Get Started
        </div>
      </div>
    </div>
  )
}
