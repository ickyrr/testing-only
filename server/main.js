import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.methods({
  TestMethodOnProd : (arg) => {
        console.log("In Prod ", arg)
        return Meteor.userId()
  }
});
