Primus = require 'primus.io'
conf = require('./daemon.conf').config
Socket = Primus.createSocket({ transformer: 'browserchannel' })

primus = new Socket "http://#{conf.server.host}:#{conf.server.port}"
socket = primus.channel 'daemon'

console.log "Starting Daemon. Connecting to http://#{conf.server.host}:#{conf.server.port}"

if process.argv.indexOf('-n') != -1
  console.log "Starting server with name: ", process.argv[process.argv.indexOf('-n')+1]
  conf.nodeName = process.argv[process.argv.indexOf('-n')+1]

socket.send 'auth', { email: conf.auth.email, nodeName: conf.nodeName }, (err, nodeId) ->
  return console.log("Daemon auth error: ", err) if err
  console.log "Daemon auth: ", nodeId
  conf.nodeId = nodeId

  initPlugins()

initPlugins = () ->
  for p in conf.plugins
    plugin = require "saron-#{p}-daemon"
    plugin.init conf, primus
