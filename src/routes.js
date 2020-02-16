const routes       = require('express').Router();
const multer       = require('multer');
const multerConfig = require('./config/multer'); 

const Post         = require('./models/PostFile');

routes.get('/', (req, res) => {
    return res.json({'msg': 'ok'});
});

routes.post('/post/files', multer(multerConfig).single('file'), async (req, res) => {
    
    const post = await Post.create({
        name: req.file.originalname,
        size: req.file.size,
        key: req.file.filename,
        url: req.file.location ? req.file.location : ''
    });

    return res.json({'data': post});
})

routes.get('/find/files', async (req, res) => {
    const files = await Post.find();

    return res.json({'data': files});
})

module.exports = routes;