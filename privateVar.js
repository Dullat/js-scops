function createUser(name) {
    let userName = "@" + name;
    let points = 10;

    let addPoints = (value) => {
        return points += value;
    }

    let getPoints = () => {
        return points;
    }

    return {userName, addPoints, getPoints}
}

let user1 = createUser('pit');

user1.addPoints(12);

console.log(user1.getPoints());