const HomeController = require("../src/controller/home.controller");
const staffController = require("../src/controller/staff.controller");
const multer = require('multer');
const upload = multer();


const router = require('express').Router();
const StaffController = new staffController();

router.get('/', (req, res, next) => {
    HomeController.index(req, res, next);
})

router.get('/users', (req, res, next) => {
    res.render('users/index')
})

router.get('/login', (req, res, next) => {
    res.render('login')
})

router.post('/login', (req, res, next) => {

});
router.get('/admin/staff', (req, res, next) => {
    StaffController.index(req, res, next);
 
});

router.get('/admin/staff/create', (req, res, next) => {
   StaffController.showHomeCreateStaff(req, res, next);

});
router.post('/admin/staff/create', upload.none(), (req, res, next) => {
    StaffController.createStaff(req, res, next).catch(err => {
        console.log(err.message);
    });

});

router.get('/admin/staff/delete',(req, res, next) => {

    StaffController.deleteStaff(req, res, next);
});

router.get('/admin/staff/edit',(req, res, next) => {

    StaffController.showHomeEditStaff(req, res, next);
});

router.post('/admin/staff/edit', upload.none(),(req, res, next) => {

    StaffController.editStaff(req, res, next);
});

module.exports = router;
