const team = {
    _players: [
        {
            firstName: 'James',
            lastName: 'Johnson',
            age: 21
        },
        {
            firstName: 'Paul',
            lastName: 'Peterson',
            age: 28
        },
        {
            firstName: 'Timmy',
            lastName: 'Turner',
            age: 18
        }
    ],
    _games: [
        {
            opponent: 'Birds',
            teamPoints: 55,
            opponentPoints: 15
        },
        {
            opponent: 'Monkeys',
            teamPoints: 62,
            opponentPoints: 30
        },
        {
            opponent: 'Tigers',
            teamPoints: 40,
            opponentPoints: 39
        }
    ],
    get games() {
        return this._games;
    },
    //this method uses destructed assignment to assign the values to the player object
    addPlayer(firstName, lastName, age) {
        let player = {
            firstName,
            lastName,
            age
        };
        this.player.push(player);
    }
}


team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);