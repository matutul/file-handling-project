var CWASAInitInterval = setInterval(() => {
    if (window.CWASA) {
        window.CWASA.init();
        clearInterval(CWASAInitInterval);
    }
});