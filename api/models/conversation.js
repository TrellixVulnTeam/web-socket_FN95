'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Conversation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Conversation.init({
    convoid: {
      allowNull: false,
      primaryKey: true,
      type:DataTypes.UUID,
      defaultValue : DataTypes.UUIDV4
    },
    members: DataTypes.ARRAY(DataTypes.STRING)
  }, {
    sequelize,
    modelName: 'Conversation',
    tableName:'conversations'
  });
  return Conversation;
};