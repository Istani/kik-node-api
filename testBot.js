const KikClient = require("./src/kikClient.js");//require("kik-node-api");

var Kik = new KikClient({
    username: "",
    password: "",
    promptCaptchas: false,
    trackUserInfo: false,
    trackFriendInfo: false,
    device: {

    },
    logger: {
        file: ["warning", "error", "info", "raw"],
        console: ["warning", "error", "info", "raw"]
    }
});

Kik.authenticate( "","");

Kik.on("authenticated", () => {

});

Kik.on("disconnected", () => {
    process.exit(1);
});

Kik.on("receivedgroupmsg", (group, sender, msg) => {
    console.log("group: ",group);
    console.log("sender:", sender);
    console.log("msg:", msg);
});
Kik.on("receivedgroupimg", (group, sender, img) => {
    console.log("group: ",group);
    console.log("sender:", sender);
    console.log("img:", img);
    Kik.sendImage(sender, img,true, true,()=>{});
});

Kik.on("receivedprivatemsg", (sender, msg) => {
    console.log("sender:", sender);
    console.log("msg:", msg);
});
Kik.on("receivedprivateimg", (sender, img) => {
    console.log("sender:", sender);
    console.log("img:", img);
    Kik.sendImage(sender, img,true, true,()=>{});
});

