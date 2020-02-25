function isValidMatNr(matNr) {
    const degrees = [
        "inf",
        "minf",
        "cgt",
        "winf",
        "bwl",
        "tinf",
        "wing",
        "ecom",
        "imca"
    ];

    const degreesPrefix = `(${degrees.join("|")})`;

    return (new RegExp(`${degreesPrefix}10\\d{4}`, "i")).test(matNr);
}

module.exports = {
    isValidMatNr
};
