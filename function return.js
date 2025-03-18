document.write('Total Subject - 5 <br> Total Marks - 500 <br> <br>');
function sumMarks (hindi,eng,math,physics,chemistry){
    var a = hindi+ eng+ math+ physics+ chemistry;
    return a;
};
var b = sumMarks(50,50,50,50,50);
document.write('Marks Obtain - ' +b+ '<br>');

function percentage(tm){
    var c = (tm/500)*100;
    return c;
};
var d = percentage(b);
document.write('Percentage - ' + d + '%');