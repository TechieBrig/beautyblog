Blogs = new Mongo.Collection("blogs")

Meteor.methods({
  createPost: function(text) {

    Blogs.insert({
      title: text,
      body: text,
      createdAt: new Date(),
    });
},

deletePost: function(postId) {

  Posts.remove(postId);
  }
});

Template.body.helpers({
  posts: function() {
    return Posts.find({}, {
      sort: { createdAt: -1 }
    });
  }
});

Template.body.events({
  'submit .new-post': function(event) {
    event.preventDefault();

  Meteor.call('createPost', event.target.text.value)

    event.target.text.value ='';
  }
});

  Template.post.helpers({
    time: function() {
      return moment(this.createdAt).fromNow();
    },
});

  Template.post.events({
    'click .delete-post': function(event) {
      Meteor.call('deletePost');
    }
  });

if (Meteor.isServer) {
  Meteor.startup(function () {
  });
}
