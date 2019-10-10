module.exports = (sequelize, DataTypes) => {
  const sponsor_sponsee = sequelize.define('sponsor_sponsee', {
    sponsee_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      autoIncrement: false
    },
    sponsor_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      autoIncrement: false
    },
  }, {});
  sponsor_sponsee.associate = function (models) {
  };
  return sponsor_sponsee;
};