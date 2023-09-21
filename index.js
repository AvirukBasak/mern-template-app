import { execSync } from 'child_process';
const command = process.argv[2];

switch (command) {
    case 'build':
        execSync('npm run build', { cwd: 'app', stdio: 'inherit' });
        break;
    case 'start':
        execSync('npm run build', { cwd: 'app', stdio: 'inherit' });
        execSync('npm start', { cwd: 'server', stdio: 'inherit' });
        break;
    case 'dev':
        // For now, just call the 'start' script
        execSync('npm run build', { cwd: 'app', stdio: 'inherit' });
        execSync('npm start', { cwd: 'server', stdio: 'inherit' });
        break;
    default:
        console.error(`invalid command: ${command}`);
        break;
}
