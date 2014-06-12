Primus = require 'primus.io'
conf = require('./configuration')
Socket = Primus.createSocket({ transformer: 'browserchannel' })

server_url = conf.server.url || "http://#{conf.server.host}:#{conf.server.port}"
primus = new Socket server_url
socket = primus.channel 'daemon'


console.log "Starting Daemon. Connecting to #{server_url}"


if process.argv.indexOf('-n') != -1
  console.log "Starting server with name: ", process.argv[process.argv.indexOf('-n')+1]
  conf.nodeName = process.argv[process.argv.indexOf('-n')+1]

socket.send 'auth', { email: conf.auth.email, nodeName: conf.nodeName }


socket.on 'authorized', (err, nodeId) ->
  return console.log("Daemon auth error: ", err) if err
  console.log "Daemon auth: ", nodeId
  conf.nodeId = nodeId

  initPlugins()


socket.on 'test', (a) ->
  console.log ">>>>>>>>>>>", a


initPlugins = () ->
  for p in conf.plugins
    plugin = require "saron-daemon-#{p}"
    plugin.init conf, primus
