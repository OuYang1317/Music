import React from 'react'
import router from 'umi/router';
const title = new Date()
function Unrecommended() {
    return (
        <div>
            <div className="Mended">
                <div className="Recommend" onClick={()=>{router.push('/Day')}} >
                    <h1>{title.getDate()}</h1>
                   <p>每日推荐</p>
                </div>
                <div className='Classification'>
                <h1>分类</h1>
                    <p>歌曲分类</p>
                </div>
                <div className="Private">
                <h1>FM</h1>
                    <p>私人FM</p>
                    
                </div>
                
            </div>
        </div>
    )
}

export default Unrecommended
