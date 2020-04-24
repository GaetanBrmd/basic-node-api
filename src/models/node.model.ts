import { Sequelize, Model, DataTypes, BuildOptions } from 'sequelize';

export default class Node extends Model {
  public id!: number;
  public name!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public static modelName: string = 'nodeModel';

  static async start(database) {
    Node.init(
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
      {
        tableName: 'nodes',
        sequelize: database, // this bit is important
      },
    );

    return await Node.sync({ force: true });
  }
}
