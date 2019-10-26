import { database } from 'firebase-admin'
/*
import {
  user
  ,userSecurity
} from './types';
*/

import { method as ackPath } from 'ack-path'

export const keyFile = ackPath(__dirname)
.join('../../../ignore/key.txt').file()

export const load = keyFile.readAsString()
.then(k=>config.key=k)

export const db = database()

export function loadUsers(){
  return db.ref("users").once('value')
  .then(data=>data.val())
  .catch(e=>console.error(e))
}

export function loadUserSecurities(){
  return db.ref("user-securities").once('value')
  .then(data=>data.val())
}

export const config = {
  key:''
}