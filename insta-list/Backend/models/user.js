module.exports = (sequelize, Datatypes) => {
    const user = sequelize.define("user", {
            id: {
                type: Datatypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: Datatypes.STRING,
                allowNull: false,
                primaryKey: false
            },
            password: {
                type: Datatypes.STRING,
                allowNull: true
    
        }
        
        });
         user.associate = models => {
            // user.hasMany(models.create,{foreginKey: {allowNull:false}});
            
         }
        
        return user;
    }