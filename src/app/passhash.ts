import * as sha512 from "js-sha512"


export function passhash(p){
  //const hash = sha512.create()
  const hash = sha512.sha512.create()
  hash.update(p)
  const hex = hash.hex()
  return hex.toUpperCase()
}
