const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const initRoutes = require('./routes/initRoutes');
const bodyParser = require('body-parser');

const app = express();

// Thiết lập Handlebars làm view engine
app.engine(
    'handlebars',
    exphbs.engine({
        defaultLayout: 'main',
        partialsDir: path.join(__dirname, 'views/partials'),
    })
);
app.set('view engine', 'handlebars');

// Thiết lập đường dẫn đến thư mục views
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
initRoutes(app);

// Khởi động server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
