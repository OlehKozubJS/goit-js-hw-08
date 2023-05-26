import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on("timeupdate", timeUpdate);
player.on("timeupdate", throttle(timeUpdate, 1000));

function timeUpdate (event) {
    console.log(event);
    localStorage.setItem("videoplayer-current-time", event.seconds);
}

player.setCurrentTime(localStorage.getItem("videoplayer-current-time") || 0);

