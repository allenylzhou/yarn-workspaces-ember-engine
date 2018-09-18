import Component from '@ember/component';
import random from '../utils/random';

export default Component.extend({
  theValue: random(100),
});
