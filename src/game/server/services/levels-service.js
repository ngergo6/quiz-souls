const data = require("../questions.json");

module.exports = {
    getLevel: getLevel,
    getAllLevels: getAllLevels
}

/**
 * 
 * @param {Number | String} levelId 
 * @returns {{ text: String, score: Number, id: Number }}
 */
function getLevel(levelId) {
    const level = data.levels[levelId];

    if (typeof level === "undefined") {
        throw new Error("Level not found");
    }

    return Object.assign({}, level, { id: levelId });
}

/**
 * @returns {{ id: Number, text: String, score: Number }[]}
 */
function getAllLevels() {
    const levels = data.levels;

    return Object.keys(levels).map(key => Object.assign({}, levels[key], { id: key }));
}