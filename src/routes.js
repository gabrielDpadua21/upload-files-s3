const routes       = require('express').Router();
const multer       = require('multer');
const multerConfig = require('./config/multer'); 

routes.get('/', (req, res) => {
    return res.json({'msg': 'ok'});
});

routes.post('/post/files', multer(multerConfig).single('file'),  (req, res) => {
    console.log(req.file);

    return res.json({'data': req.file});
})

module.exports = routes;