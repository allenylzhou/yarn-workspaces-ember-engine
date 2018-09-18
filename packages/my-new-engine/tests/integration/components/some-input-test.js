import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | some-input', function(hooks) {
  setupRenderingTest(hooks);
  hooks.beforeEach(function() {
    const router = this.owner.lookup('router:main');
    router.setupRouter();
  });

  test('it renders', async function(assert) {
    // Template block usage:
    await render(hbs`
      {{#link-to "dashboard" class="my-link"}}
        template block text
      {{/link-to}}
    `);

    assert.dom('.my-link').hasAttribute('href', '');
  });
});
