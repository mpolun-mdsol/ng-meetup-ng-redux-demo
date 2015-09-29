import * as actions from '../../actionCreators/users'
import module from './index'

module.controller('UserFormController', UserFormController)

export default class UserFormController {
  constructor($scope, $ngRedux, $state) {
    this.$state = $state
    const unsub = $ngRedux.connect(this.mapStateToTarget, actions)(this)
    $scope.$on('$destroy', unsub)
  }

  mapStateToTarget(state) {
    return {}
  }

  submitUser(user) {
    this.createUser(user)
    this.$state.go('usersList')
  }
}

UserFormController.$inject = ['$scope', '$ngRedux', '$state']
