var SwiftScraperTests = (function() {
    function assertPage1Title() {
        return document.title == 'Page 1';
    }

    function getInnerText(selector) {
        return document.querySelector(selector).innerText;
    }

    function getString() {
        return 'hello world';
    }

    function getBooleanTrue(b) {
        return true;
    }

    function getBooleanFalse(b) {
        return false;
    }

    function getNumber() {
        return 3.45;
    }
    
    function getJsonObject() {
        return {message: 'something'};
    }

    function getJsonArray() {
        return [{ fruit: 'apple' }, { fruit: 'pear' }];
    }

    function multiArg(n, b, s, numArr, obj) {
        return {
            number: n,
            bool: b,
            text: s,
            numArr: numArr,
            obj: obj
        };
    }

    return {
        assertPage1Title: assertPage1Title,
        getInnerText: getInnerText,
        getString: getString,
        getBooleanTrue: getBooleanTrue,
        getBooleanFalse: getBooleanFalse,
        getNumber: getNumber,
        getJsonObject: getJsonObject,
        getJsonArray: getJsonArray,
        multiArg: multiArg
    };
})();
