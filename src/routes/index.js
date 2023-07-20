const express = require('express');
function Api(app){
    const router = express.Router();
    app.use('/api/v1',router)
};
module.exports=Api;