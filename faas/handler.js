var nodemailer = require('nodemailer');

'use strict';

module.exports.helloWorld = (event, context, callback) => {
    const response = {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': '*', // Required for CORS support to work
        },
        body: JSON.stringify({
            message: 'Go Serverless v1.0! Your function executed successfully hola!',
            input: event,
        }),
    };

    callback(null, response);
};

module.exports.shareTodo = (event, context, callback) => {

    let requestBody = JSON.parse(event.body);

    if (requestBody.name === undefined) callback("400 Invalid Input");

    message = `<h2>Name</h2>
        <p>${requestBody.name}</p>
        <h2>Description</h2>
        <p>${requestBody.description}</p>
        <h2>Is done?</h2>
        <p>${requestBody.isDone}</p>
        <h2>Due date</h2>
        <p>${requestBody.dueDate}</p>`;

    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        auth: {
            user: 'tendenciasaplicaciones@gmail.com',
            pass: 'xulbtqdvcjrssrpn'
        }
    });

    var mailOptions = {
        from: 'tendenciasaplicaciones@gmail.com',
        to: 'tendenciasaplicaciones@gmail.com',
        subject: 'Hey! You just created a new todo!',
        html: message
    };

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            callback("400 Error");
        } else {
            response = {
                statusCode: 200,
                headers: {
                    'Access-Control-Allow-Origin': '*', // Required for CORS support to work
                },
                body: JSON.stringify({
                    message: `Mail sended!`
                }),
            };
            callback(null, response);
        }
    });
};