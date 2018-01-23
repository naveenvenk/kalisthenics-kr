var studentsApp = angular.module('students', ['studentService']);

studentsApp.controller('GirlController',
    // This order matches the order of the arguments in the controller
    ['$scope', 'StudentService', function($scope, ss) {
        $scope.girl = '';

        $scope.addGirl = function() {
            ss.addStudent($scope.girl)
        };
    }]
);

studentsApp.controller('BoyController',
    ['$scope', 'StudentService', function($scope, ss) {
        $scope.boy = '';

        $scope.addBoy = function() {
            ss.addStudent($scope.boy)
        };
    }]
);

studentsApp.controller('DisplayController',
    ['$scope', 'StudentService', function($scope, ss) {
        $scope.displayStudents = function() {
            ss.displayStudents();
        };
    }]
);

