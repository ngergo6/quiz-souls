const actionNames = require("../actions/action-names");

module.exports = function(io, socket) {
	/**
	 * 
	 * @param {string} actionName 
	 */
	function rerouteToClient(actionName) {
		socket.on(actionNames.client(actionName), (action) => {
			io.emit(actionNames.server(actionName), action);
		});
	};

	return rerouteToClient;
};
