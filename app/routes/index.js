import Ember from 'ember';


var news=[{
  title: "Why Practicing Self-Care During Bill Cosby's Trial Is So Important",
  author: "MEHREEN KASANA",
  image:"https://www.bigstockphoto.com/images/homepage/2016_bigstock_picks.jpg",
  date:"5th May"
},
{
  title: "Why Practicing Self-Care During Bill Cosby's Trial Is So Important",
  author: "MEHREEN KASANA",
  image:"https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg",
  date:"5th May"
},
{
  title: "Why Practicing Self-Care During Bill Cosby's Trial Is So Important",
  author: "MEHREEN KASANA",
  image:"https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg",
  date:"5th May"
},
{
  title: "Why Practicing Self-Care During Bill Cosby's Trial Is So Important",
  author: "MEHREEN KASANA",
  image:"https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg",
  date:"5th May"

}];
export default Ember.Route.extend({
  model() {
    return news;
  },

});
