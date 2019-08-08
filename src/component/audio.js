import React, { Component } from 'react'
import song from '../assets/30f39964b5b1f26dc84576eff9895302.flac'
// "http://m10.music.126.net/20190808155402/353a2b5a9c05c577cd07d4be3f7a5240/ymusic/0fe8/909f/2f93/30f39964b5b1f26dc84576eff9895302.flac"
// "http://m10.music.126.net/20190808194535/2c92539082480a032b5533a2301d0cbf/ymusic/b4f4/c89a/8cf2/b7e32ba0ee08c8856f5c494811d009a8.mp3"
export default class audio extends Component {
    render() {
        return (
            <div>
                 <audio loop src={song} autoPlay id="audio"></audio>
            </div>
        )
    }
}
