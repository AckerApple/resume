import { log } from "../log"
import { maxResizeImage } from './imageUtils'
import { leftJoinDocument } from 'ack-angular-fire/dist/joins'
import { Observable } from 'rxjs/internal/Observable'
import {
  //DocumentData,
  //AngularFirestoreDocument,
  AngularFirestore
} from '@angular/fire/firestore';
import { FamilyApp } from './FamilyApp'
import { photo } from '../types'

export class FamilyPhotos {
  db:AngularFirestore
  storageBase:string
  collectionBase:string

  constructor(
    public FamilyApp:FamilyApp
  ){
    this.db = this.FamilyApp.db
  }

  loadPhotos():Observable<any>{
    const collect = this.FamilyApp.db.collection(this.collectionBase,ref=>{
      return ref.orderBy("added","desc")
    })
    const vc = collect.valueChanges()
    const ob = vc.pipe( leftJoinDocument(this.FamilyApp.db,'addedBy','users','addedByUser') )
    
    ob.subscribe(data=>data,err=>log("FamilyPhotos","#loadPhotos"))
    
    return ob
  }


  sendPhotos( files:File[] ){
    let promise = Promise.resolve()

    files.forEach(file=>
      promise=promise.then(()=>this.sendPhoto(file))
    )

    return promise
  }

  deletePhoto( photo:photo ){
    return Promise.all([
      this.deletePhotoDoc( photo ),
      this.deletePhotoStorage( photo )
    ])
  }

  deletePhotoDoc( photo:photo ){
    return this.FamilyApp.db.collection( this.collectionBase ).doc(photo.uid).delete()
  }

  deletePhotoStorage( photo:photo ){
    const storage = this.FamilyApp.storage
    storage.ref(this.storageBase+ photo.uid + '-thumbs/200.'+photo.fileExt).delete()
    storage.ref(this.storageBase+ photo.uid+"."+photo.fileExt).delete()
  }

  sendPhoto( File:File ){
    const uid = this.FamilyApp.db.createId()
    const photo = this.fileToPhotoData(File, uid)

    return this.sendPhotoStorage(File, photo)
    .then(()=>this.setPhoto( photo ))
    .catch(e=>{
      this.deletePhotoDoc( photo )
      this.deletePhotoStorage( photo )
      return Promise.reject(e)
    })
  }

  sendPhotoStorage(File:File, photo:photo){
    const storage = this.FamilyApp.storage
    const ext = this.getFileExt( File )

    maxResizeImage(
      File, 200, 200
    )
    .then(file=>{
      const thumbName = '200.' + ext
      return storage.ref(this.storageBase+ photo.uid + '-thumbs/'+thumbName).put(file)
    })
    
    const newName = photo.uid + '.' + ext
    const ref = storage.ref(this.storageBase+ newName)
    return ref.put(File)
    .catch(e=>{
      log("FamilyPhotos", "#sendPhotoStorage")
      return Promise.reject(e)
    })
  }

  getFileExt( File:File ):string{
    return File.name.split('.').pop()
  }

  fileToPhotoData(File:File, uid):photo{
    const ext = this.getFileExt( File )
    return {
      uid           : uid,
      added         : Date.now(),
      name          : File.name,
      fileExt       : ext,
      addedBy       : this.FamilyApp.user.uid
    }
  }

  setPhoto(
    photo:photo
  ):Promise<any>{
    const photos = this.FamilyApp.db.collection( this.collectionBase )
    return photos.doc( photo.uid ).set( photo )
    .catch(e=>{
      log("FamilyPhotos","#setPhoto",e)
      return Promise.reject(e)
    })
  }
}