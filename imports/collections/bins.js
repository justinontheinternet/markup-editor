import { Mongo } from 'meteor/mongo';

Meteor.methods({
  'bins.insert': function() {
    return Bins.insert({
      createdAt: new Date(),
      content: '',
      sharedWith: [],
      ownerId: this.userId
    });
  },

  'bins.remove': function(bin) {
    return Bins.remove(bin);
  }, 

  'bins.update': function(bin, newContent) {
    // need to use Mongo Modifier again
      // "in the Bins collection, update the bin with this id. set the value of content to be newContent"
      // can rename newContent to content (to match name in bins editor) and use destructuring to condense code to '$set: { content }''
    return Bins.update(bin._id, { $set: { content: newContent } });
  },

  'bins.share': function(bin, email) {
    return Bins.update(bin._id, { $push: { sharedWith: email } });
  }
});

export const Bins = new Mongo.Collection('bins');