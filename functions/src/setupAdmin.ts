import * as admin from 'firebase-admin';
import { method as ackPath } from 'ack-path'

export const keyFile = ackPath(__dirname)
.join('../../../ignore/adminSdk.json').file()

const serviceAccount = keyFile.sync().readJson()

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://acker-apple.firebaseio.com"
})