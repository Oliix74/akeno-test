<script src="https://cdnjs.cloudflare.com/ajax/libs/howler/2.1.1/howler.min.js"></script>
<script>
    var sound = new Howl({
      src: ['https://interactive-examples.mdn.mozilla.net/media/examples/t-rex-roar.mp3'],
      volume: 0.5,
      onend: function () {
        alert('Finished!');
      }
    });
    sound.play()
</script>

window.alert("Hajimemashite !");

var commands = {

    'salut': function() { alert('Bonjour!'); },
    'bonjour': function() { alert('Salut!'); },
    'salut': function() { alert('Salut! comment vas-tu ?'); },
    'ça va': function() { alert('Bien et vous ?'); },
    'est-ce que tu connais les NASCAR': function() { alert('Evidemment, j\'adore Brad Keselowski ');}

}
