const db = require("../db")

class Autor{
 static inserir(){
   
 }
 static async selecionar(){
   const connect = await db.connect();
   return await connect.query("select * from autores")
 }
 static deletar(){
    
  }
 static selecionar(){
    
  }
}

module.exports = Autor;
