var nodemailer = require("nodemailer");

("use strict");

module.exports.helloWorld = (event, context, callback) => {
    const response = {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*", // Required for CORS support to work
        },
        body: JSON.stringify({
            message: "Go Serverless v1.0! Your function executed successfully hola!",
            input: event,
        }),
    };

    callback(null, response);
};

module.exports.shareTodo = (event, context, callback) => {
    let requestBody = JSON.parse(event.body);

    if (
        requestBody.receiver === undefined ||
        requestBody.todo === undefined ||
        requestBody.todo.name === undefined
    )
        callback("400 Invalid Input");

    message = `<h2>Name</h2>
        <p>${requestBody.todo.name}</p>
        <h2>Description</h2>
        <p>${requestBody.todo.description}</p>
        <h2>Is done?</h2>
        <p>${requestBody.todo.isDone}</p>
        <h2>Due date</h2>
        <p>${requestBody.todo.dueDate}</p>`;

    <<
    << << < HEAD
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
}; ===
=== =
let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    auth: {
        user: "tendenciasaplicaciones@gmail.com",
        pass: "xulbtqdvcjrssrpn",
    },
});

var mailOptions = {
    from: "tendenciasaplicaciones@gmail.com",
    to: requestBody.receiver,
    subject: "Hey! Checkout my todo!",
    html: message,
};

transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
        callback("400 Error");
    } else {
        response = {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin": "*", // Required for CORS support to work
            },
            body: JSON.stringify({
                message: `Mail sended to ${requestBody.receiver}`,
            }),
        };
        callback(null, response);
    }
});
}; >>>
>>> > f7119a49f6fd461c60d404ab008b674da131cd50