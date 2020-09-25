function copyToClipboard(elementId) {
    var el = document.createElement('textarea');
    el.value = elementId;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
}
