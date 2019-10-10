module.exports = (sequelize, DataTypes) => {
  const user_role = sequelize.define('user_role', {
    role_id: DataTypes.UUIDV4,
    user_id: DataTypes.UUIDV4
  }, {});
  user_role.associate = function (models) {
  };
  return user_role;
};