// propmpt box  also gives 2 buttons ok & cancel as well as it gives data entery queston means we  can write some answers

// var a = prompt('Enter your name');
// alert(a);
// document.write(a);     //if we want to print 
// document.write('Welcome' + a);


// eg2...
var a = prompt('Enter number of Month');
switch(true){
    case(a==1):document.write('January')
    break;
    case(a==2):document.write('February')
    break;
    case(a==3):document.write('March')
    break;
    case(a==4):document.write('April')
    break;
    case(a==5):document.write('May')
    break;
    case(a==6):document.write('June')
    break;
    case(a==7):document.write('July')
    break;
    case(a==8):document.write('August')
    break;
    case(a==9):document.write('September')
    break;
    case(a==10):document.write('October')
    break;
    case(a==11):document.write('November')
    break;
    case(a==12):document.write('December')
    break;

    default:document.write('Please enter a valid months number')
}

