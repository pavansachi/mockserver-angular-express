var express = require("express");

var router = express.Router();

var mockServer = require('mockserver-client');
var mockServerClient = mockServer.mockServerClient;

router.get('/create', function(req, res, next) {

    console.log("----- CREATE EXPECTATIONS -----");

    mockServerClient("localhost", 1080).mockAnyResponse(
    {
        'httpRequest': {
            'method': 'GET',
            'path': '/movie/all',
            'queryStringParameters': [
                
            ],
            'body': {
                
            }
        },
        'httpResponse': {
            'statusCode': 200,
            "headers": [
                {
                    "name": "Content-Type",
                    "values": ["application/json; charset=utf-8"]
                },
                {
                    "name": "Cache-Control",
                    "values": ["public, max-age=86400"]
                }
            ],
            'body': JSON.stringify([{"name":"Planet of Apes", "id": 1}, {"name":"Terminator", "id": 2}, {"name":"Fast and Furious", "id": 3}]),
            'delay': {
                'timeUnit': 'MILLISECONDS',
                'value': 250
            }
        },
        'times': {
            'remainingTimes': 1,
            'unlimited': true
        }
    }
);

res.send("Mock expectations created");

});

module.exports = router;