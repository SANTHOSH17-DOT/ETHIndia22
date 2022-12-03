import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import { fileUploaded } from "../generated/Contract/Contract"

export function createfileUploadedEvent(
  cid: string,
  user: Address,
  fileType: string,
  name: string,
  createdAt: BigInt,
  updatedAt: BigInt
): fileUploaded {
  let fileUploadedEvent = changetype<fileUploaded>(newMockEvent())

  fileUploadedEvent.parameters = new Array()

  fileUploadedEvent.parameters.push(
    new ethereum.EventParam("cid", ethereum.Value.fromString(cid))
  )
  fileUploadedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  fileUploadedEvent.parameters.push(
    new ethereum.EventParam("fileType", ethereum.Value.fromString(fileType))
  )
  fileUploadedEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )
  fileUploadedEvent.parameters.push(
    new ethereum.EventParam(
      "createdAt",
      ethereum.Value.fromUnsignedBigInt(createdAt)
    )
  )
  fileUploadedEvent.parameters.push(
    new ethereum.EventParam(
      "updatedAt",
      ethereum.Value.fromUnsignedBigInt(updatedAt)
    )
  )

  return fileUploadedEvent
}
