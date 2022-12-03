import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { fileUploaded } from "../generated/schema"
import { fileUploaded as fileUploadedEvent } from "../generated/Contract/Contract"
import { handlefileUploaded } from "../src/contract"
import { createfileUploadedEvent } from "./contract-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let cid = "Example string value"
    let user = Address.fromString("0x0000000000000000000000000000000000000001")
    let fileType = "Example string value"
    let name = "Example string value"
    let createdAt = BigInt.fromI32(234)
    let updatedAt = BigInt.fromI32(234)
    let newfileUploadedEvent = createfileUploadedEvent(
      cid,
      user,
      fileType,
      name,
      createdAt,
      updatedAt
    )
    handlefileUploaded(newfileUploadedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("fileUploaded created and stored", () => {
    assert.entityCount("fileUploaded", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "fileUploaded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "cid",
      "Example string value"
    )
    assert.fieldEquals(
      "fileUploaded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "user",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "fileUploaded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "fileType",
      "Example string value"
    )
    assert.fieldEquals(
      "fileUploaded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "name",
      "Example string value"
    )
    assert.fieldEquals(
      "fileUploaded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "createdAt",
      "234"
    )
    assert.fieldEquals(
      "fileUploaded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "updatedAt",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
