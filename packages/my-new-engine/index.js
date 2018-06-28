const EngineAddon = require('ember-engines/lib/engine-addon');

module.exports = EngineAddon.extend({
  name: 'my-new-engine',
  lazyLoading: true,
  // eslint-disable-next-line ember/avoid-leaking-state-in-ember-objects
  babel: {
    plugins: ['transform-object-rest-spread']
  }
});
