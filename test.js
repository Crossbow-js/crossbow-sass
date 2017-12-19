const {execSync} = require('child_process');
const assert = require('assert');
const {readFileSync} = require('fs');

try {
    execSync('cb "index.js --input test/fixtures/main.scss --output test/fixtures/dist"');
    execSync('cb "index.js --input test/fixtures/main.scss --output test/fixtures/dist --production"');
    assert.equal(readFileSync('test/fixtures/dist/main.css', 'utf8'), readFileSync('test/fixtures/main.expected.css', 'utf8'), 'SCSS compiles as expected');
    assert.equal(readFileSync('test/fixtures/dist/main.min.css', 'utf8'), readFileSync('test/fixtures/main.expected.min.css', 'utf8'), 'SCSS Production compiles as expected');
} catch(e) {
    console.error(e);
    process.exit(1);
}