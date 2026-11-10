const processInput = (value) => {
    if (typeof value === "string") {
        return value.toLowerCase();
    }
    else if (typeof value === "number") {
        return value * 10;
    }
    else {
        return value ? "Active" : "Inactive";
    }
};
processInput("Hello world");
processInput(12);
processInput(true);
processInput(false);
export {};
