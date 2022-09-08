class HomeController {
    static index(req, res, next) {
        let message = ["Xin chao cac ban", "Hi"];
        res.render('index', {data: message})
    }
}

module.exports = HomeController