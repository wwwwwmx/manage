import mqtt from 'mqtt'
import Vue from 'vue'

var alias = Math.random().toString(16).substr(2, 8) 
client = mqtt.connect(process.env.MQTT, { //注册地址
username: "admin",  //注册mqtt 用户名
password: "123456",  //注册mqtt 密码
protocolVersion: 4,
protocolId: 'MQTT',
clientId: alias, // 要保证全局唯一
clean: true // 控制是否授受离线消息，false可以接受离线消息
})

client.on('connect', function () {
    client.subscribe(userName, function (err) {
        if (!err) {
           console.log('Hello mqtt')
           client.publish('presence', 'Hello mqtt')
        }
        })
     })