(function() {
    'use strict';

    angular
        .module('blogApp')
        .controller('TeacherController', TeacherController);

    TeacherController.$inject = ['$scope', 'Principal', 'LoginService', '$state'];

    function TeacherController ($scope, Principal, LoginService, $state) {
        var vm = this;

        vm.account = null;
        vm.isAuthenticated = null;
        vm.login = LoginService.open;
        vm.register = register;
        $scope.$on('authenticationSuccess', function() {
            getAccount();
        });

        getAccount();

        function getAccount() {
            Principal.identity().then(function(account) {
                vm.account = account;
                vm.isAuthenticated = Principal.isAuthenticated;
            });
        }
        function register () {
            $state.go('register');
        }
    }
})();
