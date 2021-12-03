const defineProductModel = (sequelize, DataTypes) => {
  const x = sequelize.define('product', {
    // O que importa na hora de importa é o product
    name: DataTypes.STRING,
    description: DataTypes.STRING
  });
  return x;
};

module.exports = defineProductModel;