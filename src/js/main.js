import './vendor';
import './helpers';
import './components/toggle';
import './components/counter';
// import './components/social';
import {ieFix} from './vendor/ie-fix';
import {vhFix} from './vendor/vh-fix';
import './vendor/jquery.datetimepicker';
// import {actualYear} from './modules/actualYear';
// import header from './components/header';
// import lazyLoading from './modules/lazyLoading';
// import scrollToAnchor from './modules/scrollToAnchor';
import * as moment from 'moment';
import IMask from 'imask';


ieFix();
vhFix();
// actualYear();
// scrollToAnchor.init();

// header.init();
// lazyLoading.init();

$(document).ready(function() {

  moment().format('DD-MM-YYYY HH:mm');
  moment.locale('ru');
  moment.locale('ru', {
    calendar : {
        lastDay: '[Вчера,]DD MMMM [в] HH:mm', // The day before ( Yesterday at 2:30 AM )
        sameDay: '[Сегодня,]DD MMMM [в] HH:mm',
        nextDay: '[Завтра,]DD MMMM [в] 09:00',
        nextWeek: 'ddd[,] DD MMMM [в] HH:mm',
        lastWeek: 'ddd[,] DD MMMM [в] HH:mm',
        sameElse: 'ddd[,] DD MMMM [в] HH:mm'
    }
  });

  var tomorrow = new Date()
  var nextDay = tomorrow.setDate(tomorrow.getDate()+1);
  
  function setToday(current_time) {
    if (current_time) {
      let day = moment(current_time).calendar()
      $('.day').html(day)
    } else {
      $('.day').html(moment(nextDay).calendar());
    }
  }
  
  $('.day').html(moment(nextDay).calendar());

  $.datetimepicker.setLocale('ru');
  $('.date-time').datetimepicker({
    ownerDocument: document,
    contentWindow: window,
    format: 'd-m-Y H:i',
    formatDate: 'd-m-Y',
    dayOfWeekStart: 1,
    startDate:  nextDay,
    closeOnDateSelect: false,
    closeOnTimeSelect: true,
    closeOnWithoutClick: true,
    closeOnInputClick: true,
    openOnFocus: true,
    minDate: nextDay,
    minTime: '09:00',
    maxTime: '20:00',
    defaultTime: '09:00',
    allowTimes:[
      '09:00', '14:00',
    ],
    lang:'ru',
    onChangeDateTime:function (current_time) {
      setToday(current_time)
    },
    onGenerate:function() {
      let times = ['09:00-14:00', '14:00-19:00', '09:00-14:00', '14:00-19:00'];
      let timer = $('.xdsoft_time');
      timer.each(function(i) {
        $(this).text(times[i])
      });
      // $('.date-time').val(moment(nextDay))
    },
  });

  var items = document.getElementsByClassName('phone-mask');
  Array.prototype.forEach.call(items, function(element) {
    var phoneMask = new IMask(element, {
      mask: '+{7}(000)000-00-00',
      placeholder: {
        show: 'always'
      }
    });
  });
});