
const printValidIpAddress = require('./restore-ip-addresses');

test('You may return the valid IP addresses in any order ', () => {
    expect(printValidIpAddress("25525511135")).toEqual(["255.255.11.135","255.255.111.35"])
    expect(printValidIpAddress("0000")).toEqual(["0.0.0.0"])
    expect(printValidIpAddress("101023")).toEqual(["1.0.10.23","1.0.102.3","10.1.0.23","10.10.2.3","101.0.2.3"])
});
