document.currentScript = document.currentScript || (function() {
    var scripts = document.getElementsByTagName('script');
    return scripts[scripts.length - 1];
})();
function supportsImports() {
    return 'import' in document.createElement('link');
}
if (supportsImports()) {
    console.log('Import #ds-header, header length:', document.querySelectorAll('#ds-header').length, 'SSI type:', (typeof (hasHeaderSSI)), ', Target:', document.currentScript.getAttribute('target'));
    console.log('Import #ds-footer, footer length:', document.querySelectorAll('#ds-footer').length, 'SSI type:', (typeof (hasFooterSSI)), ', Target:', document.currentScript.getAttribute('target'));
    if ((document.querySelectorAll('header').length < 1) && (typeof (hasHeaderSSI) == 'undefined')) {
        console.log('Import #ds-header');
        document.body.appendChild(document.querySelector('link[rel="import"]').import.querySelector(document.currentScript.getAttribute('target')).cloneNode(true));
        document.querySelector('link[rel="import"]').remove();
    }
    else if ((document.querySelectorAll('footer').length < 1) && (typeof (hasFooterSSI) == 'undefined') && (document.currentScript.getAttribute('target')=='footer')) {
        console.log('Import #ds-footer');
        document.body.appendChild(document.querySelector('link[rel="import"]').import.querySelector(document.currentScript.getAttribute('target')).cloneNode(true));
        document.querySelector('link[rel="import"]').remove();
    }
}
