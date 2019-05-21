function getResult(str) {
    var lcd1 = ['._.', '...', '._.', '._.', '...', '._.', '._.', '._.', '._.', '._.'];
    var lcd2 = ['|.|', '..|', '._|', '._|', '|_|', '|_.', '|_.', '..|', '|_|', '|_|'];
    var lcd3 = ['|_|', '..|', '|_.', '._|', '..|', '._|', '|_|', '..|', '|_|', '..|'];
    var result = '';
    var count = 3;

    for (var i = 0; i < str.length; i++) {
        if (i == 0) {
            result += lcd1[parseInt(str[i])];
        } else {
            result += " " + lcd1[parseInt(str[i])];
        }
    }
    result += '\n';

    for (var i = 0; i < str.length; i++) {
        if (i == 0) {
            result += lcd2[parseInt(str[i])];
        } else {
            result += " " + lcd2[parseInt(str[i])];
        }
    }
    result += '\n';

    for (var i = 0; i < str.length; i++) {
        if (i == 0) {
            result += lcd3[parseInt(str[i])];
        } else {
            result += " " + lcd3[parseInt(str[i])];
        }
    }
    result += '\n';


    return result;
}

module.exports = function main(number) {

    var str = number.toString();
    return getResult(str);
};