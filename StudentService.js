angular.module('studentService', [])
    .factory('StudentService', ['$window', function(window) {
        var students = [];

        var addStudent = function(student) {
            students.push(student);
        };

        var displayStudents = function() {
            window.alert(students.join('\n'));
            students = [];
        };

        return {
            addStudent: addStudent,
            displayStudents: displayStudents
        };
    }]);
