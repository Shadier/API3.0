module.exports = (sequelize, DataTypes) => {
  const locations = sequelize.define('locations', {
    id: {
      type: DataTypes.UUID,
      primaryKey:true,
      defaultValue:DataTypes.UUIDV4,
      allowNull:false,
      autoIncrement:false
    },
    name: DataTypes.STRING,
    image: DataTypes.STRING,
   }, {});
  locations.associate = function (models) {
    locations.hasOne(models.organizations)
  };
  return locations;
};