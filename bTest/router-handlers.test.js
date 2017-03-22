const test = require('tape');
const shot = require('shot');
const router = require('./../src/router.js');

test('Router testing', (t) => {
  t.ok(true, 'Test should pass');
  t.end();
});

test('Home route', (t) => {
  shot.inject(router, {method: 'GET', url: '/'}, (res) => {
    t.equal(res.statusCode, 200);
    t.end();
  });
});
