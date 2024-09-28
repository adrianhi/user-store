import mongoose from "mongoose"

export const validators = {

  isMongoID(id: string) {

    return mongoose.isValidObjectId(id)
  }
}