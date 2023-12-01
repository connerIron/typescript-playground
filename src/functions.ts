
function addNumbers(a: number, b: number): number {
    return a + b;
}

export const addStrings = (str1: string, str2: string): string => {
    return str1 + ' ' + str2;
}
 
export const formatThings = (title: string, param: string | number): string => {
    return title + ': ' + param;
}

// export const fetchData = (url: string): Promise<string> => Promise.resolve('Data from '+url);

export function introduce(salutation: string, ...names: string[] ) : string {
    return `${salutation} ${names.join(" ")}`;
}

/* Not enforced at runtime */
export function getName(user: { first: string; last: string}): string {
    return `${user.first}, ${user.last}`;
}
 
export function getNameSafe(user: { first: string; last: string}): string {
    return `${user?.first}, ${user?.last}`;
}

export function printToFile(text: string, callback: () => void): void {
    console.log(text);
    callback();
};
 
 
export function arrayMutate(
    numbers: number[],
    mutate: (v: number) => number
): number[] {
    return numbers.map(mutate);
}
 

type MutationFunction = (v: number) => number; 
export function arrayMutateWithType(
    numbers: number[],
    mutate: MutationFunction
): number[] {
    return numbers.map(mutate);
}


// const addOne = createAdder(1); addOne(2) = 3;
export function createAdder(num: number): (val: number) => number {
    return (val: number) => num + val;
}


export default addNumbers;