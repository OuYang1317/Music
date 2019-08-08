import React from 'react'
import { SearchBar, WhiteSpace, WingBlank,List } from 'antd-mobile'
const Item = List.Item;
const Brief = Item.Brief;
function Hotserach() {

    const tap = (value) => {
        console.log(value)
    }
    return (
        <div>
            <div className="Search">
                <WingBlank></WingBlank>
                <SearchBar placeholder="最新热搜许嵩、周杰伦"onSubmit={value => tap(value)}/>
                <WhiteSpace />
            </div>
           <div className="SearchContent">
        <List>
           <Item arrow="horizontal" onClick={() => {}}>清明雨上 <Brief>自定义-许嵩</Brief> </Item>
           <Item arrow="horizontal" onClick={() => {}}>全球变冷 <Brief>自定义-许嵩</Brief> </Item>
           <Item arrow="horizontal" onClick={() => {}}>素颜 <Brief>自定义-许嵩</Brief> </Item>
           <Item arrow="horizontal" onClick={() => {}}>小烦恼没什么大不了<Brief>自定义-许嵩</Brief> </Item>
           <Item arrow="horizontal" onClick={() => {}}>全球变冷 <Brief>自定义-许嵩</Brief> </Item>
           <Item arrow="horizontal" onClick={() => {}}>素颜 <Brief>自定义-许嵩</Brief> </Item>
           <Item arrow="horizontal" onClick={() => {}}>小烦恼没什么大不了<Brief>自定义-许嵩</Brief> </Item>
           <Item arrow="horizontal" onClick={() => {}}>全球变冷 <Brief>自定义-许嵩</Brief> </Item>
           <Item arrow="horizontal" onClick={() => {}}>素颜 <Brief>自定义-许嵩</Brief> </Item>
           <Item arrow="horizontal" onClick={() => {}}>小烦恼没什么大不了<Brief>自定义-许嵩</Brief> </Item>
        </List>
           </div>
            
        </div>
    )
}

export default Hotserach
