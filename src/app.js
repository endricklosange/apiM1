const express = require('express');
const hostname = '0.0.0.0';
const port = 3000;
const server = express();
const mongoose = require('mongoose');
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

mongoose.connect('mongodb://mongo/apinode');

server.use(express.urlencoded());
server.use(express.json());

// Routes
const postRoute = require('./api/routes/postRoute');
postRoute(server);

const commentRoute = require("./api/routes/commentRoute");
commentRoute(server);

const userRoute = require("./api/routes/userRoute");
userRoute(server);
const options = {
    definition: {
      openapi: "3.1.0",
      info: {
        title: "LogRocket Express API with Swagger",
        version: "0.1.0",
        description:
          "This is a simple CRUD API application made with Express and documented with Swagger",
        license: {
          name: "MIT",
          url: "https://spdx.org/licenses/MIT.html",
        },
        contact: {
          name: "LogRocket",
          url: "https://logrocket.com",
          email: "info@email.com",
        },
      },
      servers: [
        {
          url: "http://localhost:3000",
        },
      ],
    },
    apis: ["./api/routes/*.js"],
  };
  
  const specs = swaggerJsdoc(options);
  server.use(
    "/docs",
    swaggerUi.serve,
    swaggerUi.setup(specs)
  );
server.listen(port, hostname, () => {
    console.log(`Example app listening on ${hostname} port ${port}`)
});
