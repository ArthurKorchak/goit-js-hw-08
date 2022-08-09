import Vimeo from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

player.setCurrentTime(localStorage.getItem("videoplayer-current-time"));

player.on('timeupdate', throttle((timeData) =>
    localStorage.setItem("videoplayer-current-time", timeData.seconds), 1000));