module.exports.home = (req, res) => {
    return res.send("Hello Friends");
}

module.exports.add = (req, res) => {
    const a = 10;
    const b = 20;
    const sum = a + b;
    return res.send(`Testing Summation is ${sum}`);
}