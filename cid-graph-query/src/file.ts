import {fileUploaded} from "../generated/File/File"
import {User,File} from "../generated/schema"

export function handleFileUpload(event: fileUploaded): void {
  let user = User.load(event.params.user.toHexString())
  if(user == null){
    user = new User(event.params.user.toHexString())
    user.save()
  }

  let file = new File(event.params.cid)
  file.name = event.params.name
  file.cid = event.params.cid
  file.fileType = event.params.fileType
  file.createdAt = event.params.createdAt.toString()
  file.updateAt = event.params.updatedAt.toString()
  file.user = user.id
  file.save()
}