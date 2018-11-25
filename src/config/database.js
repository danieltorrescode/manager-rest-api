const mongoose = require('mongoose');
const URI = 'mongodb://127.0.0.1:27017/manager';
// const URI = 'mongodb://dant:managerdb123*@ds129831.mlab.com:29831/manager';

mongoose.connect(URI, { useNewUrlParser: true ,useFindAndModify:false})
    .then(db => console.log('db is connected'))
    .catch(err => console.error(err));

module.exports = mongoose;
