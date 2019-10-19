import { log } from "../log"
import { FamilyPhotos } from './FamilyPhotos'

//import { leftJoinDocument } from './joins'

import {
  //AngularFirestoreDocument,
  AngularFirestoreCollection,
  AngularFirestore
} from '@angular/fire/firestore';
import { Observable } from "rxjs/internal/Observable"
//import { BehaviorSubject } from "rxjs/internal/BehaviorSubject"
//import { AppData } from './AppData'
import { getUserPhotoUrl, FamilyApp } from './FamilyApp'
import { user } from '../types'

export class FamilyData {
  load:Promise<any>
  //users$:BehaviorSubject<user[]> = new BehaviorSubject(null)
  users$:Observable<user[]>

  loadCounts:{[index:string]:number} = {
    users:0
  }

  Photos:FamilyPhotos
  ResumePhotos:FamilyPhotos

  constructor(
    //public AppData:AppData,
    public FamilyApp:FamilyApp
    //public storage:AngularFireStorage
  ){
    this.load = this.FamilyApp.load
    
    this.Photos = new FamilyPhotos(
      this.FamilyApp
    )
    this.Photos.storageBase = 'family-cloud/photos/'
    this.Photos.collectionBase = 'family-cloud/photos/uploads'
    
    this.ResumePhotos = new FamilyPhotos(
      this.FamilyApp
    )
    this.ResumePhotos.storageBase = 'resume/photos/'
    this.ResumePhotos.collectionBase = 'resume/gallery/photos'
  }

/*
  ack-array-join(
    "[arrayOne$]" = "photos$"
    "[arrayTwo$]" = "photos$"
  )

  ack-array-join(
    "[array$]" = "users$"
    name = "user"
    "[rootKeys]" = "['addedBy']"
    "[joinKeys]" = "['userId']"
    first = "true"
  )
*/

  familyCollect():AngularFirestoreCollection{
    const db:AngularFirestore = this.FamilyApp.db
    return db.collection("family-cloud")
  }

  userCollect():AngularFirestoreCollection{
    return this.FamilyApp.db.collection("users")
  }

  loadUser( uid:string ):Observable<{}>{
    return this.FamilyApp.db.collection("users").doc(uid).valueChanges()
  }

  loadUsers():Observable<user[]>{
    if( this.users$ )return this.users$

    ++this.loadCounts.users

    const collect = this.userCollect()
    this.users$ = <Observable<user[]>>collect.valueChanges()

    const sub = this.users$.subscribe(_users=>{
      --this.loadCounts.users
      sub.unsubscribe()
    },err=>{
      log("FamilyData","#loadUsers",err)
      sub.unsubscribe()
    })

    return this.users$
  }

  createUserBy( user ):Promise<any>{
    const sendUser = {
      name  : user.displayName || user.name || user.email,
      email : user.email,
      uid   : user.uid,
      added : Date.now(),
      photoUrl : getUserPhotoUrl(user)
    }
    return this.userCollect().doc(user.uid).set( sendUser )
  }
}