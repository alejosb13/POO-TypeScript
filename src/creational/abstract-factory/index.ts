import FacebookFactory from "./src/factories/facebook/facebook-factory";
import LinkedinFactory from "./src/factories/linkedin/linkedin-factory";
import SlackFactory from "./src/factories/slack/slack-factory";
import { Publisher } from "./src/publisher";

let content = "Gano el quipo del Barcelona !!!"
let Publicar = new Publisher(content);

Publicar.send(new FacebookFactory());
Publicar.send(new LinkedinFactory());
Publicar.send(new SlackFactory());