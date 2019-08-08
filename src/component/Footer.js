import React from 'react'
import img from '../assets/jkik.jpg'
import router  from 'umi/router'
function Footer() {

    const tap = () =>{
        console.log("aa")
    }
    const clicl = () =>{
        console.log("bb")
        router.push('/Songs')
    }
    return (
        <div className="Footer">
            <div className="symbolSize" onClick={()=>clicl()}>
                <img  src= {img}  alt='nihao' />
            </div>
            <div className="TitleScreen" onClick={()=>clicl()}>
                <p>Angel With A Shotgun</p>
                <p>Nightcore</p>
            </div>
            <div className="button_" onClick={()=>tap()}>
                <div className='button_img'>
                    
                </div>
            </div>
        </div>
    )
}

export default Footer
