import { Model, DataTypes } from 'sequelize';

export default class User extends Model {
  public id!: number;
  public name!: string;
  public readonly createdAt!: Date;
  public readonly updateddAt!: Date;
  public static modelName: string = 'userModel';

  static async start(sequelize) {
    User.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        name: {
          type: new DataTypes.STRING(128),
          allowNull: false,
        },
      },
      { tableName: 'users', sequelize: sequelize },
    );

    return await User.sync();
  }
}
