const { execSync } = require('child_process');
const command = process.argv[2];

function build() {
    execSync('npm install', { cwd: 'app', stdio: 'inherit' });
    execSync('npm install', { cwd: 'server', stdio: 'inherit' });
    execSync('npm run build', { cwd: 'app', stdio: 'inherit' });
}

function start() {
    execSync('npm start', { cwd: 'server', stdio: 'inherit' });
}

function dev() {
    // For now, just call the 'start' script
    start();
}

switch (command) {
    case 'build':
        build();
        break;
    case 'start':
        build();
        start();
        break;
    case 'dev':
        build();
        dev();
        break;
    default:
        console.error(`invalid command: ${command}`);
        break;
}
