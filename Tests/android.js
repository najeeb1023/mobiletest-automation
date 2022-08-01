const {config} = require('./main')

config.specs = [
    '/Users/livello/Desktop/timeless-app/Tests/Login.js'
]

config.runner = 'local'
config.host = '127.0.0.1'
config.path = '/wd/hub/'
config.port = 4723
config.capabilities = [ {"platformName": "android",
"platformVersion": "11",
"platformName" : "android",
"deviceName": "pixel-4",
"automationName": "UiAutomator2", }]
//"appPackage": "com.timeless.investments.app",
//"appActivity": "com.timeless.investments.app.MainActivity"} ]

config.sync = true
config.logLevel = 'info'
exports.config = config