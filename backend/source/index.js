// Core
import dg from 'debug';
// Instruments
import { app } from './server.js';
import { getPort } from './helpers/index.js';

const port = getPort();
const debugSrv = dg('server:main');

app.listen(port, () => {
    debugSrv(`Server API is up on port ${port}`);
});
