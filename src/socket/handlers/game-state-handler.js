const actionNames = require("../actions/action-names");
const getRerouter = require("./rerouter");

module.exports = function(io, socket) {
    const reroute = getRerouter(io, socket);

    reroute(actionNames.names.START_GAME);
    reroute(actionNames.names.LOSE_GAME);
    reroute(actionNames.names.WIN_GAME);
}