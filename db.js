 let connect = function (){
   if(global.connection){
    return global.connection.connect(); 
   }
   const {Pool} = require("pg");
   const pool = new Pool({
     connectionString: "postgres://xfypnudb:HuIWY5fKE9DRlG0BIJcu_8PySj2456sW@kesavan.db.elephantsql.com/xfypnudb"
   });

   global.connection = pool;
   return pool.connect();
 }

module.exports = {connect}