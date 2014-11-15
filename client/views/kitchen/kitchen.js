
/*****************************************************************************/
/* Kitchen: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.Kitchen.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.Kitchen.helpers({
  
  'users' : function () {

    var myUserId = Meteor.userId();

    return Meteor.users.find({_id : {$ne : myUserId}});
  },
  'getUserEmail' : function (user) {
    return user.emails[0].address;
  }

  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*****************************************************************************/
/* Kitchen: Lifecycle Hooks */
/*****************************************************************************/
Template.Kitchen.created = function () {
};

Template.Kitchen.rendered = function () {
};

Template.Kitchen.destroyed = function () {
};


