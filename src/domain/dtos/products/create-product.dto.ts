import { validators } from "../../../config";



export class CreateProductDto {

  private constructor(
    public readonly name: string,
    public readonly available: boolean,
    public readonly price: number,
    public readonly description: string,
    public readonly user: string, //ID
    public readonly category: string, //ID
  ) { }


  static create(object: { [key: string]: any }): [string?, CreateProductDto?] {

    const {
      name,
      available = false,
      price,
      description,
      user,
      category,
    } = object;
    let availableBoolean = available;

    if (!name) return ['Missing name'];
    if (!user) return ['Missing user'];

    if (!validators.isMongoID(user)) return ['Invalid User ID'];

    if (!category) return ['Missing category'];
    if (!validators.isMongoID(category)) return ['Invalid Category ID'];
    if (typeof available !== 'boolean') {
      availableBoolean = (available === 'true')
    }

    return [undefined, new CreateProductDto(
      name,
      availableBoolean,
      price,
      description,
      user,
      category,)];

  }


}



