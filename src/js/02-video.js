import Vimeo from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

player.setCurrentTime(localStorage.getItem("currentPlayerTime"));

player.on('timeupdate', throttle((timeData) => localStorage.setItem("currentPlayerTime", timeData.seconds), 1000));