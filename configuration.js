module.exports = {
  nodeName: "Serverul Fenrir, UAIC, FII",
  auth: {
    email: "caliman_john@yahoo.com"
  },
  plugins: [
    "terminal",
    "monitor",
    "logs"
  ],
  logStreams: {
    apache_stream: [
      "F:\\Programare\\Node.JS\\derby-0.6\\tests\\logs\\test_logs.txt"
    ],
    fenrir_stream: [
      "F:\\Programare\\Node.JS\\derby-0.6\\tests\\logs\\test_logs2.txt"
    ]
  },
  monitoredDrives: ['F', 'E', 'C'],
  server: {
    host: '127.0.0.1',
    port: 3000
  }
};

