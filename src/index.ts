import server from './app';
import 'reflect-metadata';

server.listen (3001, () => {
    console.log(`app listening on port ${3001}`);
});
