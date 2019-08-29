const dns = require('dns');
const dnsPromises = dns.promises;
const options = {
    family: 6,
    hints: dns.ADDRCONFIG | dns.V4MAPPED,
};

dnsPromises.lookup('sohojdev.dotlines.com.sg', options).then((result) => {
    console.log('address: %j family: IPv%s', result.address, result.family);
    // address: "2606:2800:220:1:248:1893:25c8:1946" family: IPv6
});

// When options.all is true, the result will be an Array.
options.all = true;
dnsPromises.lookup('example.com', options).then((result) => {
    console.log('addresses: %j', result);
    // addresses: [{"address":"2606:2800:220:1:248:1893:25c8:1946","family":6}]
});