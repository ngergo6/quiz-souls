const actionNames = require("../actions/action-names");
const getRerouter = require("./rerouter");

module.exports = function(io, socket) {
    const reroute = getRerouter(io, socket);

    reroute(actionNames.names.LOAD_QUESTION);
    reroute(actionNames.names.MARK_ANSWER_SELECTED);
    reroute(actionNames.names.MARK_ANSWER_CORRECT);
    reroute(actionNames.names.MARK_ANSWER_WRONG);
}