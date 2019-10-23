module.exports = (sequelize, DataTypes) => {
  const Owner = sequelize.define("Owner", {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  // Model association
  Owner.associate = function(models) {
    Owner.hasMany(models.User, {
      onDelete: "cascade"
    });
  };

  return Owner;
};
