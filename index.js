const { execSync } = require('child_process');
const command = process.argv[2];

function install() {
    execSync('npm install', { cwd: 'app', stdio: 'inherit' });
    execSync('npm install', { cwd: 'server', stdio: 'inherit' });
}

function build() {
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
    case 'install':
        install();
        break;
    case 'build':
        build();
        break;
    case 'start':
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
