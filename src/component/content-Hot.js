/* eslint-disable react-hooks/rules-of-hooks */
import React,{ useState , useEffect } from 'react'
import { Grid } from 'antd-mobile'
import {Songs} from '../Tools/DataUrl'
function contentHot(){

    const [data,setData] = useState([])

    useEffect(()=>{
        Songs(12).then(res=>{
            setData(res.data.playlists)
        })
    },[])
    return (
        <div className="newsongs">
            <Grid data={data}
                columnNum={3}
                renderItem={dataitem => (
                    <div style={{ padding: '12.5px'}}>
                    <img src={dataitem.coverImgUrl} style={{ width: '75px', height: '75px' }} alt="" />
                    <div style={{ color: '#888', fontSize: '11px', marginTop: '12px' }}>
                        <span>{dataitem.name}</span>
                    </div>
                    </div>
                )}
                itemStyle={{borderRadius:'5px',margin:'5px',height:'130px',lineHeight:'1', backgroundColor:'rgba(255, 255, 255,.8)',boxShadow:'0px 0px 4px -2px #000'}}
                hasLine={false}
                />
        </div>
    )
}

export default contentHot
