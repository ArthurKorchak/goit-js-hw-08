import Vimeo from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const currentTime = localStorage.getItem("videoplayer-current-time");
const player = new Vimeo(iframe);

currentTime ? player.setCurrentTime(currentTime) : null;

player.on('timeupdate', throttle((timeData) =>
    localStorage.setItem("videoplayer-current-time", timeData.seconds), 1000));