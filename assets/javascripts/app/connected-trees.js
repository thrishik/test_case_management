(function () {
  'use strict';

  angular.module('app', ['ui.tree'])
    .constant('treeConfig', {
      treeClass: 'angular-ui-tree',
      emptyTreeClass: 'angular-ui-tree-empty',
      hiddenClass: 'angular-ui-tree-hidden',
      nodesClass: 'angular-ui-tree-nodes',
      nodeClass: 'angular-ui-tree-node',
      handleClass: 'angular-ui-tree-handle',
      placeholderClass: 'angular-ui-tree-placeholder',
      dragClass: 'angular-ui-tree-drag',
      dragThreshold: 3,
      levelThreshold: 30,
      defaultCollapsed: false
    })
    .controller('ConnectedTreesCtrl', ['$scope', function ($scope) {
      $scope.remove = function (scope) {
        scope.remove();
      };

      $scope.toggle = function (scope) {
        scope.toggle();
      };

      $scope.newSubItem = function (scope) {
        var nodeData = scope.$modelValue;
        nodeData.nodes.push({
          id: nodeData.id * 10 + nodeData.nodes.length,
          title: nodeData.title + '.' + (nodeData.nodes.length + 1),
          nodes: []
        });
      };

      $scope.tree1 = [{
        'id': 1,
        'title': 'tree1 - item1',
        'nodes': []
      }, {
        'id': 2,
        'title': 'tree1 - item2',
        'nodes': []
      }, {
        'id': 3,
        'title': 'tree1 - item3',
        'nodes': []
      }, {
        'id': 4,
        'title': 'tree1 - item4',
        'nodes': []
      }];
      $scope.tree2 = [{
        'id': 1,
        'title': 'tree2 - item1',
        'nodes': []
      }, {
        'id': 2,
        'title': 'tree2 - item2',
        'nodes': []
      }, {
        'id': 3,
        'title': 'tree2 - item3',
        'nodes': []
      }, {
        'id': 4,
        'title': 'tree2 - item4',
        'nodes': []
      }];
    }]);

}());
