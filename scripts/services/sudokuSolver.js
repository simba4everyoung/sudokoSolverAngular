(function () {
  'use strict';

  angular
    .module('sdApp')
    .factory('sudokuSolver', sudokuSolver);

  function sudokuSolver () {
    var service = {
      solve: solve
    };

    return service;

    // **************
    // functions
    // **************
    
    function solve () {
      console.log('solved');
    }
  }
})();
