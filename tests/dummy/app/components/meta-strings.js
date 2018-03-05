import Component from '@ember/component';
import { computed } from '@ember/object'

import $ from 'jquery';

export default Component.extend({
  classNames: ['meta-strings'],

  strings: computed(function () {
    return $(document).find('meta[name=nokia-string]').map(function() {
      return $(this).attr('content')
    }).toArray();
  }),

  slices: computed(function () {
    return parseInt($(document).find('meta[name=slices]').attr('content'));
  }),

  animated: computed(function () {
    const attr = $(document).find('meta[name=animated]').attr('content');

    return attr === 'true'
  })
});
