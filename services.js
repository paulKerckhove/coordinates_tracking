let rankingModule = angular.module('rankingModule', []);

const usersRankings = $http.get('/ranking/:id');
const usersInfos = $http.get('/users/:id');


/**
 * function that gets the ranking data from a specified endpoint then the users data.
 * the function uses .map and findIndex (returns -1) if similarity not found.
 * the ternary operator checks if we have a return greater than -1 then it assign the data or an empty string.
 */

rankingModule.controller('rankingCtrl', function ($q, $http) {
  $q.all([usersRankings, usersInfos])
    .then(function (responses) {
    //$q returns an array of promises
    getRanking(responses[0], responses[1])
  })

  function getRanking (rankings, users) {
    console.log("users ", users);
    console.log("rankings", rankings);
    let rankedUsers = rankings.map(function (ranking) {
      let indexArray = users.findIndex(function (user) { return user.id === ranking.user; });
      ranking.firstName = indexArray > -1 ? users[indexArray].firstName : "";
      ranking.lastName = indexArray > -1 ? users[indexArray].lastName : "";
      return console.log('ranking', ranking);
    })
    return rankedUsers;
  }
})
