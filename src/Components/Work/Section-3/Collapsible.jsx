import React from 'react';

const Collapsible = ({ item, index, isActive, onToggle }) => {
    return (
        <div className="collapsible">
            <div className="collapsible-title" onClick={onToggle}>
                <h3>{item.que}</h3>
                <div>
                    <button className={`accordion-btn ${isActive ? 'active' : ''}`}>
                        {isActive ? '-' : '+'}
                    </button>
                </div>
            </div>
            <div className={`collapsible-desc ${isActive ? 'active' : ''}`}>
                <p>{item.ans}</p>
            </div>
        </div>
    );
};

export default Collapsible;
