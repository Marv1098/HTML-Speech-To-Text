function startDictation() {
  //if(window.hasOwnProperty('webkitSpeechRecognition')) {
    //var recognition = new webkitSpeechRecognition();
    var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
    var recognition = new SpeechRecognition();

    // Listen for single word or a phrase
    recognition.continuous = false;
    // Set false means that the interim results are finals and not changeable
    recognition.interimResults = false;

    // Language: 'en-US = English US' & 'en-IN = English India to handle Accent & 'en-AU = English Australia'
    recognition.lang = "en-US";
    recognition.lang = "en-IN";
    recognition.lang = "en-AU";
    // Starting Speech Recognition
    recognition.start();

    // An event handler that will run when the speech recognition service returns a result.
    recognition.onresult = function(e) {
      // The first [0] returns the speechrecognitionresult at postion 0 and the second [0] returns the
      // speechrecognitionalternative at position 0. Returns a string containing the transcript of the
      // recognized word.
      document.getElementById('transcript').value = e.results[0][0].transcript;
      // this stop the speechrecognition service from listening to incoming audio.
      recognition.stop();
      // This submit method submits the form to micSearch in HTML
      document.getElementById('micSearch').submit();
    };
    recognition.onerror = function(e) {
      recognition.stop();
    }
  //}
}
