Blogs = new Mongo.Collection("blogs")

Meteor.methods({
  createPost: function  (text) {
  

    Blogs.insert({
      title: title,
      body: body,
      createdAt: new Date(),
    
  });
},

deletePost: function(post)

Posts.remove(post);
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
  'submit .new-post': function (event) {
    event.preventDefault();

  Meteor.call('createPost',event.target.text)

    event.target.text.value ='';
  }
});

  Template.post.helpers({
    time: function() {
      return moment(this.createdAt).fromNow();
    },

Template.post.events({
    'click .delete-post': function(event) {
      Meteor.call('deletepost');
    }
  });
}
if (Meteor.isServer) {
  Meteor.startup(function () {
  });
}