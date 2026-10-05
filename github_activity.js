(function(root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.shouldShowActivityMap = factory();
  }
})(typeof self !== 'undefined' ? self : this, function() {
  var meaningfulEventTypes = ['PushEvent', 'PullRequestEvent', 'IssuesEvent', 'CreateEvent'];

  return function(events) {
    if (!Array.isArray(events)) {
      return false;
    }

    return events.filter(function(event) {
      return event && meaningfulEventTypes.indexOf(event.type) !== -1;
    }).length >= 5;
  };
});
