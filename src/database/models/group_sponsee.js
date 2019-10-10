module.exports = (sequelize, DataTypes) => {
  const group_sponsee = sequelize.define('group_sponsee', {
    group_id: DataTypes.UUID,
    sponsee_id: DataTypes.UUID
  }, {});
  group_sponsee.associate = function (models) {
  };
  return group_sponsee;
};