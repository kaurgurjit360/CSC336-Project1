module.exports = (sequelize, Datatypes) => {
    const likesong = sequelize.define("likesong", {
       
      userId:{
          type: Datatypes.INTEGER,
          primaryKey: true,
          autoIncrement: false
      },
      songId:{
          type: Datatypes.INTEGER,
          allowNull:false,
          unique:true
      }
           
        
        });
         likesong.associate = models => {
            
            likesong.belongsTo(models.user,{

                foreignKey:'userId',
                unique:true,
                allowNull:false
            })

            likesong.belongsTo(models.song,{

                foreginKey: 'songId'  ,
                unique:true,
                allowNull:false  
                
            })
    
             
            
            };
          
         
        
        return likesong;
    }