var configValues = require("./config.json");

module.exports = {
    getDbConnectionString : function () {
        return 'mongodb+srv://'+ configValues.uname  + ':' + configValues.pwd + 
        '@nodetodo-wurfx.mongodb.net/nodetodo';
    }
}
