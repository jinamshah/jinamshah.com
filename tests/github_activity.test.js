const test = require('node:test');
const assert = require('node:assert/strict');
const shouldShowActivityMap = require('../github_activity.js');

test('keeps the repository shelf when activity is low', () => {
  const events = [
    { type: 'PushEvent' },
    { type: 'WatchEvent' },
    { type: 'ForkEvent' },
  ];

  assert.equal(shouldShowActivityMap(events), false);
});

test('shows the contribution map after five meaningful events', () => {
  const events = [
    { type: 'PushEvent' },
    { type: 'PullRequestEvent' },
    { type: 'IssuesEvent' },
    { type: 'CreateEvent' },
    { type: 'PushEvent' },
  ];

  assert.equal(shouldShowActivityMap(events), true);
});

test('ignores malformed and non-contribution events', () => {
  const events = [
    null,
    { type: 'WatchEvent' },
    { type: 'ForkEvent' },
    { type: 'PublicEvent' },
    {},
  ];

  assert.equal(shouldShowActivityMap(events), false);
});
