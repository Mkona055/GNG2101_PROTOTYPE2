const webpush = require('web-push');

// VAPID keys should only be generated only once.
const vapidKeys = {
    publicKey: 'BNrGC9Ci-eMfpfVaHaMmkzZd1Lzo3RypzzilYTskVaSo5-6tKnV5hH_oF7Tg04wl3mf3hE4LbvgrqYYx1xmMrHM',
    privateKey: '21cOvrJgewOjGqDXQhVrQ8XQCFUJGO45e3M3PUWQz9w'
};

webpush.setVapidDetails(
  'mailto:example@yourdomain.org',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

// This is the same output of calling JSON.stringify on a PushSubscription
const pushSubscription = {
    endpoint:"https://fcm.googleapis.com/fcm/send/etEnSumsWlI:APA91bFqUef5Pz97TTMsQZ4MmlbQOC0eLU6m0YB54G7FaWUwcc9TAsX3g7D1ULJPeYAMgc0eaSFac54TvsDEqi8Iwa5slhERFWTVpAuPhOFRKrsXrocQUj8SMawJLcYYqFh4WE4DVL0N",
    keys:{
        auth:"3Z0ml-ui5w4Njas9iX492w",
        p256dh:"BGGY31IzlBVynfWWCu05d-LBBfX3RGIGuA7FRJTCkAIiRpR7MGLxBTTLdnG9_5IG8l8-z9LUeRPJgA-BNq9CpQE"
        }
};


webpush.sendNotification(pushSubscription, 'Your Push Payload Text');