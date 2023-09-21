import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

global.__filename = fileURLToPath(import.meta.url);
global.__dirname = path.dirname(__filename);

global.PATHS = {};
global.PATHS.public = 'static';
global.PATHS.build = path.join(__dirname, '..', PATHS.public);

import dotenv from 'dotenv';

dotenv.config();
dotenv.config({ path: path.resolve(__dirname, '.env.local'), override: true });

if (!fs.existsSync(PATHS.build)) throw new Error(
      `build path '${PATHS.public}' not found in project root\n`
    + 'run `npm run build` in your project root'
);
