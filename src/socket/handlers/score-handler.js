const actionNames = require("../actions/action-names");
const getRerouter = require("./rerouter");

module.exports = function(io, socket) {
    const reroute = getRerouter(io, socket);

    reroute(actionNames.names.ADD_SCORE);
    reroute(actionNames.names.RESET_SCORE);
}