export interface user{
  id        : string
  email     : string
  name      : string
  lastLogin : number

  security? : userSecurity
}

export interface userSecurity{
  id     : string
  hash   : string
  token? : string
}