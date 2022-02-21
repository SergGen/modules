console.log('loadScript');

/**
 *
 * @param {string | Function | Array} param
 * @param {Function} callback
 */
function loadScript (param, callback = () => {}) {
    let cb = callback;
    let scriptsLoadedCount = 0;
    if(typeof param === 'function'){
        param();
    } else if (Array.isArray(param)) {
        const hoc = () => {
            scriptsLoadedCount++;
            if(scriptsLoadedCount === param.length) {
                cb();
            }
        }
        param.forEach( elem => {
            loader(elem, hoc);
        });
    } else if (typeof param === 'string') {
        loader(param, callback);
    } else {
        throw new TypeError('Wrong type loadScript input params');
    }
}

/**
 * Загрузка одного скрипта
 * @param {string} path
 * @param {Function} callback
 */
function loader(path, callback) {
    let scripts = [...document.body.children].filter(script => script.localName === 'script');
    let repeatCheck = scripts.some(script => script.src.includes(`${path}`));
    if(!repeatCheck) {
        const script = document.createElement('script');
        script.src = path;
        document.body.appendChild(script);
        script.onload = callback;
    }
}