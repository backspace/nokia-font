import Component from '@ember/component';
import { computed } from '@ember/object'

import $ from 'jquery';

export default Component.extend({
  strings: computed(function () {
    return $(document).find('meta[name=nokia-string]').map(function() {
      return $(this).attr('content')
    }).toArray();
  }),

  slices: computed(function () {
    return parseInt($(document).find('meta[name=slices]').attr('content'));
  })
});
