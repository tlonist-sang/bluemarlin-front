
export const validateAlphanumeric = (input) => {
    let matcher = new RegExp("^[a-zA-Z0-9].*");
    if(input === null ||
        input === undefined ||
        input.length === 0 ||
        !matcher.test(input))
        return false;
    return true;
}