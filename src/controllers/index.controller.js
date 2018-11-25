const indexCtrl = {};

indexCtrl.getIndexPage = (req, res, next) => {
		res.render('index', { title: 'Manager API', message: 'Project Manager Back-End!' })
};

module.exports = indexCtrl;
