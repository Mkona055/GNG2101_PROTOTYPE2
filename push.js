var push = require('web-push')

let vapidKeys = {
    publicKey: 'BNrGC9Ci-eMfpfVaHaMmkzZd1Lzo3RypzzilYTskVaSo5-6tKnV5hH_oF7Tg04wl3mf3hE4LbvgrqYYx1xmMrHM',
    privateKey: '21cOvrJgewOjGqDXQhVrQ8XQCFUJGO45e3M3PUWQz9w'
}

push.setVapidDetails('mailto:konatesoma08@gmail.com',vapidKeys.publicKey,vapidKeys.privateKey);

let sub = {
    
}
push.sendNotification(sub,"Hey i am a notif")