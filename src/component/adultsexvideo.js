/* eslint-disable react-hooks/rules-of-hooks */
import React,{ useState , useEffect } from 'react'
import { Grid } from 'antd-mobile'
import {Newvideo} from '../Tools/DataUrl'
function adultsexvideo() {
    const [date,setDate] = useState([])
    useEffect(()=>{
        Newvideo(10).then(res=>{
            setDate(res.data.data)
        })
    },[])
    const tap =(index)=>{
        console.log(index)
    }

    return (
        <div className="videoimg">
             <Grid data={date}
                columnNum={2}
                renderItem={dataItem=> (
                    <div onClick ={()=>tap(dataItem.id)}>
                    <img src={dataItem.cover} style={{ width: '10rem', height: '6.875rem' }} alt="" />
                    <div style={{ color: '#888', fontSize: '12px', marginTop: '10px' }}>
                        <span>{dataItem.name}</span>
                    </div>
                    </div>
                )}
                itemStyle={{borderRadius:'5px',margin:'5px',height:'170px',lineHeight:'1', backgroundColor:'rgba(255, 255, 255,.8)',boxShadow:'0px 0px 4px -2px #000'}}
                hasLine={false}
                /> 
        </div>
    )
}

export default adultsexvideo
