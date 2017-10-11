[![Build Status](https://travis-ci.org/ngergo6/quiz-souls.svg?branch=master)](https://travis-ci.org/ngergo6/quiz-souls)

# DarkSouls quiz

quiz-souls is a Dark Souls quiz game implemented in NodeJS and React.

## Development

1. clone the repository

1. create an `.env` by duplicating the `.env.example` file and fill it with the proper environmental variables

1. run `yarn install`

1. run `yarn start`

1. open your browser, the app will be running on the port specified in the `.env` file

## Contributing

You can contribute by spending pull requests with questions for the game.

You can find the questions in a json file located at `./src/game/server/questions.json`.

Make sure that every question has a different `id` per level, also different answers must have differnet `id`s aswell.