exports.config = {
     runner: 'local',
     port: 4723,
     hosts: '127.0.0.1',
     path: '/wd/hub/',
     logLevel: 'info',
     framework: 'mocha',
     mochaOpts: {
        ui: 'bdd',
        require: ['@babel/register'],
        timeout: 6000
     },


     maxInstances: 1,
     async: true,
     specs: [
        './Tests/Login.js'
     ],

     capabilities: [{
    
        "platformName": "android",
        "platformVersion": "11",
        "deviceName": "pixel-4",
        "automationName": "UiAutomator2",
        //"appPackage": "com.timeless.investments.app",
        //"appActivity": "com.timeless.investments.app.MainActivity"
        
    }],

}








// exports.config = {
//     services: ['appium'],
//     port: 4723,
  
//     // PATH is important for appium local server :
//     path: '/wd/hub/',
    
//     runner: 'local',
//     specs: ['./tests/*.js'],
//     capabilities: [
//       {
//         maxInstances: 1,
//         browserName: '',
//         //appiumVersion: '1.20.2',
//         platformName: 'Android',
//         platformVersion: '11',
//         deviceName: 'pixel-4',
//         appPackage: 'com.timeless.investments.app',
//         appActivity: "com.timeless.investments.app",
//         automationName: 'UiAutomator2',
//       },
//     ],
  
//     logLevel: 'trace',
//     bail: 0,
//     waitforTimeout: 10000,
//     connectionRetryTimeout: 90000,
//     connectionRetryCount: 3,
//     framework: 'mocha',
//     reporters: ['spec'],
//     mochaOpts: {
//       ui: 'bdd',
//       timeout: 60000,
//     },
//   };