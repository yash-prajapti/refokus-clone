import React from 'react'

function PanelCard({item}) {
    return (
        <div className='panel-card'>
            <div className="panel-card-title">
                <h5>{item.cardTitle}</h5>
            </div>
            <div className="panel-card-num">
                <h1>{item.cardNum}</h1>
            </div>
            <div className="panel-card-desc">
                <p>{item.cardDesc}</p>
            </div>
        </div>
    )
}

export default PanelCard