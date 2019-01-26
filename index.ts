import Server from "./classes/server";
import router from './routes/router';
import bodyParser from 'body-parser';
import cors from 'cors';

const server = new Server();

// BodyParser
server.app.use( bodyParser.urlencoded({ extended: true }) );
server.app.use( bodyParser.json() );

// CORS
server.app.use( cors({ origin: true, credentials: true }) );

// Routes
server.app.use( '/', router );

// Starting
server.start( () => {
    console.log(`El servidor está corriendo en el puerto ${ server.port }`);
} );
