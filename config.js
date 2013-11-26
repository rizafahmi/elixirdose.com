// # Ghost Configuration
// Setup your Ghost install for various environments

var path = require('path'),
    config;

config = {
    production: {
        url: 'http://elixirdose.com',
        mail: {
          transport: 'SMTP',
          options: {
            host: '127.0.0.1',
            service: 'mySMTPService'
          }
        },
        database: {
            client: 'mysql',
            connection: {
            	host: '127.0.0.1',
		user: 'ghost',
		password: 'brwcv6dnoCo5',
		database: 'ghost',
		charset: 'utf8'
            },
            debug: false
        },
        server: {
            // Host to be passed to node's `net.Server#listen()`
            host: '127.0.0.1',
            // Port to be passed to node's `net.Server#listen()`, for iisnode set this to `process.env.PORT`
            port: '2368'
        }
    }
};

// Export config
module.exports = config;
