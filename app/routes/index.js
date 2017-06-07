import Ember from 'ember';

var bustles= [{
  title: "Why Practicing Self-Care During Bill Cosby's Trial Is So Important",
  author: "Kinuthia Samuel",
  image:"https://www.bigstockphoto.com/images/homepage/2016_bigstock_picks.jpg",
  date:"5th June"
},
{
  title: "Looking pretty boosts your self confidence",
  author: "Betty Mutai",
  image:"https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg",
  date:"10th Dec"
},
{
  title: "Why Smoking weed is awesome",
  author: "Kevin Warui",
  image:"https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg",
  date:"26th May"
},
{
  title: "How I learnt to code",
  author: "Paul Nderitu",
  image:"https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg",
  date:"5th May"
}];



export default Ember.Route.extend({
    model() {
    return bustles;

  },

});
