import 'angular-ui-router'
import UsersController from './components/users/controller'
import UserFormController from './components/users/formController'

angular.module('routes', ['ui.router', 'users'])
  .config(($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/')
    $stateProvider.state('usersList', {
      url: '/',
      controller: UsersController,
      controllerAs: 'vm',
      template: `
        <h1>Users</h1>
        <a ui-sref="userForm">Add a user</a>
        <table class="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>email</th>
            </tr>
          </thead>
          <tbody>
            <tr ng-repeat="user in vm.users">
              <td ng-bind="user.name"></td>
              <td ng-bind="user.email"></td>
            </tr>
          </tbody>
        </table>
      `
    })
    $stateProvider.state('userForm', {
      url: '/users/new',
      controller: UserFormController,
      controllerAs: 'vm',
      template: `
        <h1>Create New User</h1>
        <form ng-submit="vm.submitUser(user)">
          <label for="#username">Name</label>
          <input type="text" ng-model="user.name" id="username">
          <label for="#useremail">Email</label>
          <input type="email" ng-model="user.email" id="useremail">
          <input type="submit" value="submit">
        </form>
      `
    })
  })
