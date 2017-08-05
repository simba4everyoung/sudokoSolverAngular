(function () {
  'use strict';

  angular
    .module('sdApp')
    .controller('mainController', mainController);

  mainController.$inject = ['$scope'];

  function mainController ($scope) {
    $scope.puzzle = [
      [1, 0, 0, 0, 5, 4, 7, 0, 3],
      [3, 0, 0, 0, 2, 0, 0, 6, 8],
      [0, 6, 7, 0, 3, 8, 0, 0, 9],
      [0, 0, 0, 2, 9, 0, 6, 3, 0],
      [0, 0, 6, 0, 8, 0, 5, 0, 0],
      [0, 3, 5, 0, 7, 6, 0, 0, 0],
      [5, 0, 0, 9, 1, 0, 8, 4, 0],
      [4, 1, 0, 0, 6, 0, 0, 0, 5],
      [6, 0, 8, 5, 4, 0, 0, 0, 2]
    ];
    $scope.results = generateEmptyPuzzle();

    function generateEmptyPuzzle () {
      var array = [];
      for (var i = 0; i < 9; i++) {
        array.push(
          new Array(10).join('0').split('').map(parseFloat)
        );
      }
      return array;
    }
  }
})();
