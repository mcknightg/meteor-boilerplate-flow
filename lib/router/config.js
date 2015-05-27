// Global route
// FlowRouter.subscriptions = function() {
//   this.register('myCourses', Meteor.subscribe('courses'));
// };

FlowRouter.notfound = {
    // Subscriptions registered here don't have Fast Render support.
    subscriptions: function() {

    },
    action: function() {
  		FlowLayout.render("notFound");
    }
};
