// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class fileUploaded extends ethereum.Event {
  get params(): fileUploaded__Params {
    return new fileUploaded__Params(this);
  }
}

export class fileUploaded__Params {
  _event: fileUploaded;

  constructor(event: fileUploaded) {
    this._event = event;
  }

  get cid(): string {
    return this._event.parameters[0].value.toString();
  }

  get user(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get fileType(): string {
    return this._event.parameters[2].value.toString();
  }

  get name(): string {
    return this._event.parameters[3].value.toString();
  }

  get createdAt(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get updatedAt(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }
}

export class File extends ethereum.SmartContract {
  static bind(address: Address): File {
    return new File("File", address);
  }
}