<!DOCTYPE html>
<html>
<head></head>
<body>

<div id="data_display" style="display:block; text-align: left; width: 600px;">

<script>

var url = "https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3";

// Create an AudioElement
const audioElement = document.createElement('audio');
 
audioElement.setAttribute("controls", true);
audioElement.setAttribute('crossOrigin', "anonymous");
audioElement.setAttribute('autoplay', true);
audioElement.setAttribute('preload', "auto");
// OR
// audioElement.setAttribute('src', url);

// -----------------------------------------------

// Create an AudioContext
// var audioContext = new (window.AudioContext || window.webkitAudioContext)();
// audioContext = new AudioContext();
// OR
var audioContext = new AudioContext();

// -----------------------------------------------

// Create an SourceElement (audioSourceNode)
var sourceElement = document.createElement('source');
 
sourceElement.setAttribute("src", url);
console.log('sourceElement: ', sourceElement);

// -----------------------------------------------
 
audioElement.appendChild(sourceElement);
 
document.getElementById('data_display').appendChild(audioElement);

</script>

</body>
</html>
