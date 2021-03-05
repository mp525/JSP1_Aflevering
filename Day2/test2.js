const DOS_Detector = require("./dosDetector");

const detector = new DOS_Detector(1000);

detector.on("DosDetected", (e)=>{
    console.log("DosDetected", e);
});

detector.addUrl("hej");

setTimeout(()=>{detector.addUrl("hej");}, 500);
