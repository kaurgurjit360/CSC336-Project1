module.exports = (sequelize, Datatypes) => {
    const user = sequelize.define("user", {
            id: {
                type: Datatypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                
            },
            name: {
                type: Datatypes.STRING,
                allowNull: false,
                unique: true
            },
            password: {
                type: Datatypes.STRING,
                allowNull: false
        }
        });
         user.associate = models => {
            user.hasMany(models.likesong,{foreginKey:'useId', allowNull:false, primarunqiyKey:true});
            
         }
        
        return user;
    }