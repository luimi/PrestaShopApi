
export const json2xml = (obj) => {
    let xml = '';
    for (let prop in obj) {
        xml += obj[prop] instanceof Array ? '' : "<" + prop + ">";
        if (obj[prop] instanceof Array) {
            for (let array in obj[prop]) {
                xml += "<" + prop + ">";
                xml += json2xml({...obj[prop][array]});
                xml += "</" + prop + ">";
            }
        } else if (typeof obj[prop] == "object") {
            xml += json2xml({...obj[prop]});
        } else {
            xml += obj[prop];
        }
        xml += obj[prop] instanceof Array ? '' : "</" + prop + ">";
    }
    xml = xml.replace(/<\/?[0-9]{1,}>/g, '');
    return xml
}