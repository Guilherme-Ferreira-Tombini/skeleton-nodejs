const db = require("../db")

class Autor{
 static async inserir(data){
  const connect = await db.connect();
   const sql="insert into autores (nome, sobrenome, data_de_nascimento) values($1,$2,$3)";
   const values= [data.nome, data.sobrenome, data.data_de_nascimento];
   return await connect.query(sql, values) 
 }
 static async selecionar(){
   const connect = await db.connect();
   return await connect.query("select * from autores")
 }
 static deletar(){
    
}
  
 static atualizar(){
    
}
  
}

module.exports = Autor;
