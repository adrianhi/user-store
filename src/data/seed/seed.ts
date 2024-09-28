import { envs } from "../../config";
import { CategoryModel, MongoDatabase, ProductModel, UserModel } from "../mongo";
import { seedData } from "./data";


(async () => {
  await MongoDatabase.connect({
    dbName: envs.MONGO_DB_NAME,
    mongoUrl: envs.MONGO_URL,
  });

  await main();

  await MongoDatabase.disconnect();
})();

async function main() {

  await Promise.all(
    [
      UserModel.deleteMany(),
      CategoryModel.deleteMany(),
      ProductModel.deleteMany(),
    ]
  )
  const users = await UserModel.insertMany(seedData.users)
  const categories = await CategoryModel.insertMany(seedData.categories.map(
    category => {
      return {
        ...category,
        user: users[0].id,
      }
    }
  ))

  const products = await ProductModel.insertMany(seedData.products.map(
    product => {
      return {
        ...product,
        category: categories[0].id,
        user: users[0].id,
      }
    }
  ))
}