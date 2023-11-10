const http = require('http');

const data2 = [
    {
      id: 0,
      name: "Curve",
      apy: 49.23,
      available: 32,
      deposited: 12.4,
      tvl: 5296202,
      address: "0xC92E8bdf79f0507f65a392b0ab4667716BFE0110"
    },
    {
      id: 1,
      name: "Ethereum",
      apy: 21.23,
      available: 12,
      deposited: 4,
      tvl: 5292,
      address: "0x3a51269E0707A3416044bad5066858A12198fCf5"
    },
    {
      id: 2,
      name: "Bitcoin",
      apy: 12.42,
      available: 10,
      deposited: 14.2,
      tvl: 152,
      address: "0xAD2f9A55518Dba12E8AB069502820923351667C5"
    }
  ];

const server = http.createServer((req, res) => {
  console.log("New connection!");
  
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(data2));
});

const PORT = process.env.PORT || 3040;

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});