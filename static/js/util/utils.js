import dateformater from 'dateformater'

var player = null;

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}

function dateformat(date, format) {
  if(!format) {
    return dateformater.format(date, 'YYYY-MM-DD')
  }
  return  dateformater.format(date, format);
}

var openPlayer = function(audio){
  if(player == null) {
    player = window.open('/player', 'mushareplayer');
  } else {
    player.postMessage(JSON.stringify(audio), '*');
  }
};

export {guid, dateformat, openPlayer}