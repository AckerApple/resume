export * from './setupAdmin'
import * as functions from 'firebase-functions';
import * as routers from 'ack-node/js/modules/router'

import { webapp } from 'ack-host/js/webapp'

const helmet = require('helmet')
const app = webapp()

app.cors()
app.ignoreFavors()
app.use( helmet() )

app.get(/\/robots\.txt$/, routers.noRobots())
.meta({
  status:["lock","star"],
  details:"ensures no bots crawl this server",
  returnType:"string",
  sample:()=>({
    test:{only:false},
    path:"/robots.txt"
  })
})


import {
  validJwtRoute, login, usersRoute
} from './routes'
app.post("/family-api/login", login)
app.get("/family-api/users", usersRoute)
app.get("/family-api/validate", validJwtRoute)

export const familyApi = functions.https.onRequest(app)
/*
export const familyApi = functions.https.onRequest((req,res)=>{
  res.send("aok")
})
*/
/*
setTimeout(()=>{
  console.log("release")
}, 10000)*/