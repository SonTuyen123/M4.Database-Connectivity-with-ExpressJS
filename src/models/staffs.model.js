
const Model = require("./Model");

class staffsModels extends Model{
   
   async getAllStaff() {
        const sql = "SELECT * FROM staffs";
        return await this.querySQL(sql);
     }
     async addStaff(data) {
         const sql = `INSERT INTO staffs (name, age, phone, address, ranks)
                      VALUES ('${data.name}',${data.age},'${data.phone}','${data.address}','${data.ranks}')`
         return await this.querySQL(sql);
     }
    async deleteStaff(id) {
        const sql = `DELETE FROM staffs WHERE id = ${id}`;
        return await this.querySQL(sql);
   }
   async editStaff(data) {
      const sql = `UPDATE staffs SET name ='${data.name}',age =${data.age}, phone = '${data.phone}', address = '${data.address}',ranks = '${data.ranks}'
                             WHERE  id = ${data.id}`;
        return await this.querySQL(sql);
   }
    async findStaffById(id) {
        const sql = `SELECT * FROM staffs where id = ${id}`;
        return await this.querySQL(sql);
    }

}
module.exports = staffsModels;