var push = require('web-push');

let vapidKeys = {
    publicKey: 'BNrGC9Ci-eMfpfVaHaMmkzZd1Lzo3RypzzilYTskVaSo5-6tKnV5hH_oF7Tg04wl3mf3hE4LbvgrqYYx1xmMrHM',
    privateKey: '21cOvrJgewOjGqDXQhVrQ8XQCFUJGO45e3M3PUWQz9w'
};

push.setVapidDetails('mailto:konatesoma08@gmail.com',vapidKeys.publicKey,vapidKeys.privateKey);

let sub = {
    endpoint:"https://wns2-bl2p.notify.windows.com/w/?token=BQYAAADhDEEUuHDhF3c3Nu%2buVh9AY9zaEuzDW5GRFD7s21JqoDNq3ARZc2gaIohmhWVFa9SVlmx9X6LAYZtvenbZacp1eVgf3nZhVK%2b4VHyv7%2bJ5abDTWW1wOC64m5MMdhdyUyZ76AvkvBLyujGs%2f0%2bK8Php%2feBLHmU1dPV4lB7Fr7CUc2%2fYys6xh8ZtobSfQEkvIGeZmYaBdDv6v%2bCNk85mIj%2fR7oCYF3r9Wo1AlFQKp2bNUj%2bDpMasjgH6C1hMIjzn6mrJO5%2fCRjbSS0Z2829SBaw4Dp6vDDBfu7IU4reZLEBjGiMz01C2ikoCbmVI9uTYj2tpON9cPmc5hJ7lp7y9K%2fn5QKPn70gHFn62SdgfMmCQhQ%3d%3d",
    expirationTime:null,
    keys:{p256dh:"BIuApeW3MgspGxnCtkETXboikB9Pxoh2Ig1CGVlngp_7bB0BzdVsH4OYjYsXj1BFeflmduRBR8bByXqxQFELQTU",
            auth:"4N9pvaSh4oYE6Ym6bkuprA"
        }
    };
push.sendNotification(sub,"Hey i am a notif");