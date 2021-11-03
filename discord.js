let superagent = require('superagent')
var fs = require('fs');

function get(url, address) {
    superagent.post(url)
        .set(
            {
                "authority": "https://discord.com",
                "path": "/api/v9/channels/904964553085964368/messages",
                "scheme": "https",
                "accept": "*/*",
                "accept-encoding": "gzip, deflate, br",
                'accept-language': 'zh-CN',
                'authorization': 'OTA0OTk1OTI3ODc2NTk5ODE4.YYEVmg.p1Nm8z_lMtUkK1sK4wMqS6GXpuM',
                'content-length': '58',
                'content-type': 'application/json',
                'cookie': '__dcfduid=3b5082403bc911ecaca07f36c879bbcf; __sdcfduid=3b5082413bc911ecaca07f36c879bbcf365f775525a29d86a72e55543f2fd105c315c0899594949bb38bcb9a2c89f86e',
                'origin': 'https://discord.com',
                'referer': 'https://discord.com/channels/883589686491230270/904964553085964368',
                'sec-fetch-dest': 'empty',
                'sec-fetch-mode': 'cors',
                'sec-fetch-site': 'same-origin',
                'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36',
                'x-debug-options':'bugReporterEnabled',
                'x-super-properties': 'eyJvcyI6IldpbmRvd3MiLCJicm93c2VyIjoiQ2hyb21lIiwiZGV2aWNlIjoiIiwic3lzdGVtX2xvY2FsZSI6InpoLUNOIiwiYnJvd3Nlcl91c2VyX2FnZW50IjoiTW96aWxsYS81LjAgKGlQaG9uZTsgQ1BVIGlQaG9uZSBPUyAxM18yXzMgbGlrZSBNYWMgT1MgWCkgQXBwbGVXZWJLaXQvNjA1LjEuMTUgKEtIVE1MLCBsaWtlIEdlY2tvKSBWZXJzaW9uLzEzLjAuMyBNb2JpbGUvMTVFMTQ4IFNhZmFyaS82MDQuMSIsImJyb3dzZXJfdmVyc2lvbiI6IjEzLjAuMyIsIm9zX3ZlcnNpb24iOiIxMy4yLjMiLCJyZWZlcnJlciI6IiIsInJlZmVycmluZ19kb21haW4iOiIiLCJyZWZlcnJlcl9jdXJyZW50IjoiIiwicmVmZXJyaW5nX2RvbWFpbl9jdXJyZW50IjoiIiwicmVsZWFzZV9jaGFubmVsIjoic3RhYmxlIiwiY2xpZW50X2J1aWxkX251bWJlciI6MTAzMjU1LCJjbGllbnRfZXZlbnRfc291cmNlIjpudWxsfQ=='
            }
        )
        .send({
            content: address,
            nonce: "905043740875023360",
            tts: false
        })
        .end(
            function (err,res) {
                console.log(err);
                if (err) {
                    throw Error(err);
                    return
                }
               /* fs.appendFile("./接口数据.txt", JSON.stringify(res.text), 'utf-8', function (err) {
                    if (err) {
                        console.log(err);
                    }
                });*/
            }
        )
}

/*arr.forEach(item => {
  905029911146659840
            905030064612048896
            905030419726991360
            905030865531174912
            905031393413693440
            905031611412643840
    get('https://filzilla.cc/Home/Index/save?0.3733688949224232', item)
})*/
var arr = ["冲","大家一起冲","冲冲冲冲冲冲",
    "口说好话、心想好意、身行好事","原谅别人就是善待自己","手心向下是助人，手心向上是求人；助人快乐，求人痛苦"
]
var index = Math.floor((Math.random()*arr.length));
get('https://discord.com/api/v9/channels/904964553085964368/messages', arr[index])
/*
setInterval(()=>{

}, 31000)
*/
