class Functions {
    static completeZeroLeft(codigo) {
        return ("0000000000"+codigo).slice(-10);
    }
    static getDecimalFromFormatBrazil(value){
        String.prototype.replaceAll = String.prototype.replaceAll || function(needle, replacement) {
            return this.split(needle).join(replacement);
        };
        value = value.replaceAll('.','');
        value = value.replace(',','.');
        return value;
    }
    static getUniqueHash(){
        const crypto = require('crypto');
        let current_date = (new Date()).valueOf().toString();
        let random = Math.random().toString();
        return crypto.createHash('sha1').update(current_date + random).digest('hex');
    }
}
module.exports = Functions;