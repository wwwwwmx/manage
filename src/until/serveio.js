//引入simple-peer
import Peer from 'simple-peer';
//引入socket.io连接器
import io from 'socket.io-client'

//客户端的socket连接
const socket = io.connect('http://localhost:5001')

function App(){
    //创建存储的状态
   const myVideo = useRef()
   //获取数据流
   navigator.mediaDevices.getUserMedia({video:true,audio:true}).then(stream=>{
    console.log(stream)
    myVideo.current.srcObject = stream
   })
    return(
    //视频容器
    <div className='video'>
        <video ref={myVideo}></video>
    </div>)
}