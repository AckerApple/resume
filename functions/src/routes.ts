import { ackX as ack } from 'ack-node'
import {
  user,
  userSecurity
} from './types'

import {
  load,
  config, //save, users, userSecurities
  db,
  loadUsers,
  loadUserSecurities
} from './json-database'

export function verifyAuth(auth:string):Promise<boolean>{
  return load.then(()=>
    ack.jwt(auth,config.key).verify()
  )
  //return ack.jwt(auth,config.key).verify()
  .then( ()=>true )
  .catch( (_e:any)=>false )
}

export const validJwtRoute = (req:any, res:any)=>{
  const auth = getReqAuth( req )
  
  return verifyAuth(auth)
  .then((valid:boolean)=>
    res.json(valid)
  )
}

export function getReqAuth( req:any ):string{
  const aReq = ack.reqres(req,null).req
  return aReq.input().headers().get('Authorization')
}

export const usersRoute = (req:any, res:any)=>{
  const auth = getReqAuth( req )
console.log('0000000000')
  verifyAuth(auth)
  .then((valid:boolean)=>{
console.log('1111111111')
    if( !valid ){
      return unauthRes(res)
    }
    
console.log('44444444444')
    return loadUsers()
    .then(users=>{
console.log('55555555555555')
      res.json( users )})
  })
}

export function unauthRes( res:any ){
  res.statusCode = 401;
  res.send("Unauthorized User")
}

export const login = (req:any,res:any)=>{
  const reqUser = req.body

  Promise.all([
    loadUsers(),
    loadUserSecurities()
  ])
  .then(results=>{
    const users = results[0]
    const userSecurities = results[1]

    const user = <user>users.find((user:user)=>
      user.email.toLowerCase()===reqUser.email.toLowerCase()
    )

    if( !user ){
      return unauthRes(res)
    }

    const security = <userSecurity>userSecurities.find((userSecurity:userSecurity)=>
      userSecurity.hash===reqUser.security.hash
    )

    if( !security ){
      return unauthRes(res)
    }
    
    user.lastLogin = Date.now()
    db.ref("users").update(users)
    //save.users()

    const localUser = {...user}
    localUser.security = {...security}
    delete localUser.security.hash

    var payload = {userId:user.id}
    const expires = 864000//seconds, 10 days
    const options={
      expiresIn:expires//seconds
    }
    var signed = ack.jwt(payload, config.key, options).sign()
    
    res.setHeader('Authorization', signed)
    localUser.security.token = signed

    res.json(localUser)
  })
}