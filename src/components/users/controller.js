import * as actions from '../../actionCreators/users'
import module from './index'

module.controller('UsersController', UsersController)

export default class UsersController {
  constructor($scope, $ngRedux) {
    const unsub = $ngRedux.connect(this.mapStateToTarget, actions)(this)
    $scope.$on('$destroy', unsub)
  }

  mapStateToTarget(state) {
    return {users: state.users}
  }
}

UsersController.$inject = ['$scope', '$ngRedux']
