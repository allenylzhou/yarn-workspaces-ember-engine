import { start } from 'ember-qunit';
import { setResolver } from 'ember-test-helpers';
import manifest from 'dummy/config/asset-manifest';
import preloadAssets from 'ember-asset-loader/test-support/preload-assets';
import engineResolverFor from 'ember-engines/test-support/engine-resolver-for';

setResolver(engineResolverFor('my-new-engine'));

preloadAssets(manifest).then(start);
