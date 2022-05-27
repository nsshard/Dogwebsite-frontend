const allowedOrigins = [
    'https://www.yoursite.com',
    'http://127.0.0.1:5500',
    'http://127.0.0.1:3000',
    'http://127.0.0.1:3001',
    'http://localhost:3500',
    'http://localhost:3000',
    'http://localhost:3001'
];

/**
 * Allows CORS actions depending on the place
 * 
 */

module.exports = allowedOrigins;