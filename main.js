window.addEventListener('beforeunload', function (e) {
    // Standard way to trigger the browser's confirmation dialog
    e.preventDefault();
    // Setting returnValue is required for many browsers to show the prompt
    e.returnValue = ''; 
});
