const staffsModel = require('../models/staffs.model');



class StaffController {
    staffsModel;

    constructor() {
        this.staffsModel = new staffsModel();
    }
    async index(req, res, next) {
        let staff = await this.staffsModel.getAllStaff();
        res.render('staff/list', {staffs: staff})
    }

    showHomeCreateStaff(req, res, next) {
        res.render('staff/create');
    }
    async createStaff(req, res, next) {
        let data = req.body
        let staff = await this.staffsModel.addStaff(data);
        res.redirect('/admin/staff');
    }
    async deleteStaff(req, res, next) {
        let id = req.query.id;
        let deleteStaff = await this.staffsModel.deleteStaff(id);
        res.redirect('/admin/staff');
    }
    async showHomeEditStaff(req, res) {
        let id = req.query.id;
        let findStaff = await this.staffsModel.findStaffById(id)
        // console.log(findStaff)
        res.render('staff/edit',{findStaff: findStaff});
    }
    async editStaff(req, res, next) {
        let data = req.body;
        // console.log(data)
        let editStaff = await this.staffsModel.editStaff(data);
        res.redirect('/admin/staff')
    }
}
module.exports = StaffController;