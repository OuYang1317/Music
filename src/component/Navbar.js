import React from 'react'
import { Tabs } from 'antd-mobile';
import router from 'umi/router';
const tabs = [
  { title: '我的',tab:'my_putchar'},
  { title: '发现',tab:''},
  { title: '云村',tab:'hockeymusic'},
  { title: '搜索',tab:'lastSearchValue'},
]
function Navbar() {
    return (
        <div>
            <Tabs tabs={tabs}
            initialPage={0}
            onChange={(tab) => { 
                router.push('/'+tab.tab);
            }}
            tabBarInactiveTextColor="#CFCFCF"
            tabBarActiveTextColor="red"
            tabBarUnderlineStyle={{borderColor:'red',borderWidth: "1px"}}
            > 
            </Tabs>
        </div>
    )
}
export default Navbar








