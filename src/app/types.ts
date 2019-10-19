export interface photo{
  name     : string
  uid      : string
  added    : number
  fileExt  : string
  addedBy  : string
}

export interface user{
  uid       : string
  email     : string
  name      : string
  lastLogin?: number
  photoUrl? : string
  trusted?  : boolean
  //security? : userSecurity
}
/*
export interface userSecurity{
  id     : string
  hash   : string
  token? : string
}
*/