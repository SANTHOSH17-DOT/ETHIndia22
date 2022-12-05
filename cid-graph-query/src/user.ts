import {userAdded} from "../generated/UserFunctions/UserFunctions"
import { User } from "../generated/schema"

export function handleAddUser(event: userAdded): void {
  let user = User.load(event.params.user.toHexString())
  if(user == null){
    user = new User(event.params.user.toHexString())
    user.address = event.params.user.toHexString()
    user.save()
  }
}