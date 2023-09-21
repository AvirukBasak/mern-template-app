import path from 'path';
import { fileURLToPath } from 'url';

global.__filename = fileURLToPath(import.meta.url);
global.__dirname = path.dirname(__filename);

global.PATHS = {
    build: path.join(__dirname, '..', 'static'),
}

import dotenv from 'dotenv';

dotenv.config();
dotenv.config({ path: path.resolve(__dirname, '.env.local'), override: true });
