module.exports = {
   db_url: 'mongodb://' + process.env.ENV_VARIABLE.OPENSHIFT_MONGODB_DB_HOST+':'+process.env.ENV_VARIABLE.OPENSHIFT_MONGODB_DB_PORT/
};
