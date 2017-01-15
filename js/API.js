import {get} from "../node_modules/jquery"
import ServerActions from "./actions/ServerActions"

let API = {
  fetchLinks() {
    console.log("1. In the API");
    get("/graphql", {
      query: `{
        links {
          _id,
          title,
          url
        }
      }`
    }).done(resp => {
      ServerActions.receiveLinks(resp.data.links);
    });
  }
};

export default API;
