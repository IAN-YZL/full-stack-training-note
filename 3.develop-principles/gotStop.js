
function getStop(flights) {
    let flightNum = flights.length;
    switch (flightNum) {
        case 1:
            return 'Direct';
        case 2:
            return '1 stop';
        default:
            return `${flightNum - 1} stops`;
    }
}

let test = [{a:1, b:2}, {a:3, b:4}, {a:2, b:3}];

console.log(getStop(test));