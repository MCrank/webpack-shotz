import $ from 'jquery';
import 'bootstrap';
import './index.scss';

$('.btn').on('click', () => {
  $('#got-kicked').append('<p>I Got Kicked in the Ass Yo</p>');
});

console.log('Hello');
