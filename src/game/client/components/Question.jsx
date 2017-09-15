import propTypes from "prop-types";

export function Question({text, level}) {
    return (
        <div>
            <h5>{text}</h5>
            <b>{level}</b>
        </div>
    );
}

Question.propTypes = {
    text: propTypes.string.isRequired,
    level: propTypes.string.isRequired
}