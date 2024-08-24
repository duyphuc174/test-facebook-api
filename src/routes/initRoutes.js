const express = require('express');
const fbRouter = require('./fbRouter');

const initRoutes = (app) => {
    app.use('/fb', fbRouter);
    app;
    app.use('/', (req, res) => {
        res.render('components/home', { title: 'Express' });
    });
};

module.exports = initRoutes;
