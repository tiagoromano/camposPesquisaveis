(function($app) {
  angular.module('custom.controllers', []);

  app.controller('HomeController', ['$scope', '$http', '$rootScope', '$state', '$translate', 'Notification', function($scope, $http, $rootScope, $state, $translate, Notification) {

    $rootScope.http = $http;
    $rootScope.Notification = Notification;

    for (var x in app.userEvents)
      $scope[x] = app.userEvents[x].bind($scope);

    try {
      if (cronapi) {
        $scope['cronapi'] = cronapi;
        $scope['cronapi'].$scope = $scope;
        $scope.safeApply = safeApply;
      }
    } catch (e) {
      console.info('Not loaded cronapi functions');
      console.info(e);
    }
    try {
      if (blockly)
        $scope['blockly'] = blockly;
    } catch (e) {
      console.info('Not loaded blockly functions');
      console.info(e);
    }

    $scope.message = {};

  }]);
}(app));
