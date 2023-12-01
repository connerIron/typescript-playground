// function overloading examples

interface Coordinate {
    x: number;
    y: number;
}

function parseCoordinateFromObject(obj: Coordinate): Coordinate {
    return {
        ...obj,
    };
}

function parseCoordinateFromNumbers(x: number, y: number): Coordinate {
    return {
        x,
        y,
    };
}

function parseCoordinateOverloaded(obj: Coordinate): Coordinate;
function parseCoordinateOverloaded(x: number, y: number): Coordinate;
function parseCoordinateOverloaded(arg1: unknown, arg2?: unknown): Coordinate {
    let coord: Coordinate = {x: 0, y: 0};

    // Check arg1's type
    if(typeof arg1 === 'object') {
        coord = arg1 as Coordinate;
        coord = {
            ...(arg1 as Coordinate)
        }; 
    }else {
        coord.x = arg1 as number;
        coord.y = arg2 as number;
    }

    return coord;
}