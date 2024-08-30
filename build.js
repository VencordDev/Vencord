const { exec } = require('child_process');
const util = require('util');
const execPromise = util.promisify(exec);

async function runCommand(command, description) {
    try {
        const { stdout, stderr } = await execPromise(command);
        console.log(stdout);
        if (stderr) {
            console.error(stderr);
        }
    } catch (error) {
        console.log(error)
        process.exit(1);
    }
}

async function main() {
    await runCommand('npm install -g pnpm', 'CMD');
    await runCommand('pnpm install', "CMD");
    await runCommand('pnpm build', "CMD");
    await runCommand('pnpm inject', "CMD");
}

main();
