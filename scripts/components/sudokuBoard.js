(function () {
  'use strict';

  angular
    .module('sdApp')
    .component('sudokuBoard', {
      templateUrl: 'scripts/components/sudokuBoard.html',
      bindings: {
        puzzle: '<'
      }
    });
})();
