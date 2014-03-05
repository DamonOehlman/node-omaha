var omaha = require('..');
var nub = require('whisk/nub');
var test = require('tape');

test('can get a stream of chromium builds from omaha', function(t) {
  var expected = ['cf', 'linux', 'mac', 'win', 'cros', 'ios', 'android'];
  var collected = [];

  t.plan(1);
  omaha()
    .on('data', function(config) {
      collected.push(config && config.os);
    })
    .on('end', function() {
      t.deepEqual(nub(collected), expected, 'got expected oses');
    })
});