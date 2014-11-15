/**
 * Created by yannbuydens on 15/11/14.
 */
Meteor.publish('user_data', function () {
  return Meteor.users.find({},{emails : 1});
});