import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('company');
  this.route('advertise');
  this.route('apps');
  this.route('labs');
  this.route('terms');
  this.route('privacy');
  this.route('dcma');
  this.route('contacts');
  this.route('homepage');
  this.route('news');
  this.route('entertainment');
  this.route('beauty');
  this.route('fashion');
  this.route('lifestyle');
  this.route('books');
  this.route('tech');
  this.route('flowcharts');
});

export default Router;
