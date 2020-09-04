
/*this file is to be saved as speakgoodbye.js*/

(function(window) {
    var byeSpeaker = new Object();
    var speakWord = "Good Bye";
    byeSpeaker.speak = function speak(name) {
        console.log(speakWord + " " + name);
    };
    window.byeSpeaker = byeSpeaker;
})(window);