module.exports = {
  nodeName: "My Laptop", // a name for monitored server
  auth: {
    email: "caliman_john@yahoo.com" // email whom you registered to Saron app
  },
  plugins: [ // plugins you want to use for this server
    "terminal", // you will have a terminal in browser connected to this server, useful for remote control
    "monitor",  // you will see in browser CPU, RAM and Hard Disk usage
    "logs"      // you will see in browser all logs from monitored log files
  ],
  logStreams: { // monitored log files, optional
    apache_stream_1: [
      "F:\\Programare\\Node.JS\\derby-0.6\\tests\\logs\\test_logs.txt"
    ],
    apache_stream_2: [
      "F:\\Programare\\Node.JS\\derby-0.6\\tests\\logs\\test_logs2.txt"
    ]
  },
  monitoredDrives: ['F', 'E', 'C'], // Disk drives you want to monitorize, on linux use '/'
  server: { // address to Saron server, you can use port and host or a full url
//    url: 'https://saron-monitor-c9-icaliman.c9.io',
    host: '127.0.0.1',
    port: 3000
  }
}
