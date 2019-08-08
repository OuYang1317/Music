import React from 'react'
const title = new Date()
function Unrecommended() {
    
    return (
        <div>
            <div>
                <div>
                    <h1>{title.getDate()}</h1>
                   <span>每日推荐</span>
                </div>
                
            </div>
        </div>
    )
}

export default Unrecommended
