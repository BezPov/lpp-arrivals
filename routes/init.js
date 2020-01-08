module.exports = function (server) {
    require('./arrivalRoutes')(server);

    require('./infoRoutes')(server);
    require('./healthRoutes')(server);
    require('./metricsRoutes')(server);
};