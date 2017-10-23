import "zone.js"
import "reflect-metadata"
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic"

import { AppModule } from "./app.module"

//import { supportDocument } from "ack-angular-fx/web-animations.min"
//supportDocument(document)

platformBrowserDynamic().bootstrapModule(AppModule)
