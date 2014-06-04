module.exports = {
  nodeName: "My Laptop",
  auth: {
//    email: "ion.caliman@info.uaic.ro"
    email: "caliman_john@yahoo.com"
  },
  plugins: [
    "terminal",
    "monitor",
    "logs"
//    "file-manager"
  ],
  logStreams: {
    apache_stream_1: [
      "F:\\Programare\\Node.JS\\derby-0.6\\tests\\logs\\test_logs.txt"
    ],
    apache_stream_2: [
      "F:\\Programare\\Node.JS\\derby-0.6\\tests\\logs\\test_logs2.txt"
    ]
  },
  monitoredDrives: ['F', 'E', 'C'], // pe linux va fi '/'
  server: {
    host: '127.0.0.1',
    port: 3000
  }
}