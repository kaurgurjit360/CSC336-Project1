module.exports = (sequelize, Datatypes) => {
    const create = sequelize.define("create", {
       
      
           
        
        });
         create.associate = models => {
            
            ceate.belongsTo(models.user,{

                foreignKey:{
                    
                    primaryKey: true
                    
                }
            })

            create.belongsTo(models.playlist,{

                foreginKey: {
                    primaryKey: true
                }
            })
    
             
            
            };
          
         
        
        return create;
    }