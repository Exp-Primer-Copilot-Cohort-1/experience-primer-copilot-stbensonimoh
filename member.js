function skillsMember() {
    return {
        restrict: 'E',
        templateUrl: 'app/views/skills-member.html',
        controller: 'SkillsMemberController',
        controllerAs: 'vm',
        bindToController: true,
        scope: {
            member: '='
        }
    };
}