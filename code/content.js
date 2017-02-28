chrome.extension.sendMessage({}, function(response) {
    var readyStateCheckInterval = setInterval(function() {
        if (document.readyState === "complete") {
            clearInterval(readyStateCheckInterval);

            var workspace = document.getElementById("workspace");

            workspace.addEventListener("mousewheel", function (event) {
                event.stopPropagation();
            }, true);
        }
    }, 1);
});