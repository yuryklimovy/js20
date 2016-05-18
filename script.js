$(function() {

  $.getJSON("data.json", function(data) {
    var skills = [];
    var names = [];
    var friends = [];

    _.map(data, function(item) {
      _.each(item.skills, function(skill) {
        skills.push(skill);
      });
    });

    skills = _.sortBy(_.uniq(skills));

    var sortByFriendsData = _.sortBy(data, 'friends.length');

    _.map(sortByFriendsData, function(item) {
      names.push(item.name);
    });

    _.map(data, function(item) {
      _.each(item.friends, function(friend) {
        friends.push(friend.name);
      });
    });

    friends = _.uniq(friends);

    console.log('Скилы не повторяются, и отсортированы по алфавит ', skills);
    console.log('Имена отсортированы по кол-ву друзей ', names);
    console.log('Имена друзей не повторяются', friends);


  });
});
