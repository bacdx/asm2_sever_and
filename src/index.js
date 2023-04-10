const express=require('express');
const {engine}=require('express-handlebars');
const path=require('path');
const app = express();
const methodOverride = require('method-override');
const connect=require('./app/db/config');
const route=require('./routes/index');

connect.connect();
app.engine('hbs',engine({
    extname: '.hbs',
}))
app.set('view engine','hbs')
app.set('views',path.join(__dirname, 'resourcse/views'));
app.use(express.urlencoded({ extended:true}))
app.use(methodOverride('_method'))


route(app);
app.listen(3000)
