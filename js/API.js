import {get} from "../node_modules/jquery"
import ServerActions from "./actions/ServerActions"

let API = {
  fetchLinks() {
    console.log("1. In the API");
    // Ajax request to read /data/links
    get("/data/links").done(resp => {
      ServerActions.receiveLinks(resp);
    });
  }
};

export default API;
