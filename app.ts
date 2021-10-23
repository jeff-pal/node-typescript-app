import { Server } from './src/server'

function formatText(text: string, maxLength: number = 8): string {
    let value = ''
    for(let i=0; i<maxLength; i++) {
        value += text[i] || ' '
    }
    return value;
}

const server = new Server('Test', 0)

console.log('Name     | Port');
console.log('___________________');

console.log(`${formatText(server.name)} | ${formatText(server.port + '')}`)

server.name = 'Test2'
server.port = 1

console.log(`${formatText(server.name)} | ${formatText(server.port + '')}`)
