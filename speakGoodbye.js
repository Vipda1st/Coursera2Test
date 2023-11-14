(function (window) {
    // Create the byeSpeaker object
    var byeSpeaker = {};

    // Attach the "speak" method to the byeSpeaker object
    byeSpeaker.speak = function (name) {
        console.log("Goodbye " + name);
    };

    // Expose the byeSpeaker object to the global context
    window.byeSpeaker = byeSpeaker;

})(window);