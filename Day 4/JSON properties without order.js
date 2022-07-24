
///// Comparing two JSON having the same properties but without order using key as the refernce
var obj1 = {name : "Person1" , age : 5};
var obj2 = {age : 5, name : "Person1" };
 var comparison = true;
 if (Object.keys(obj1).length == Object.keys(obj2).length) {
    for (key in obj1) {
        if (obj1[key] == obj2[key]) {
            continue;
        }
        else {
            comparison = false;
            break;
            }
        }
    }
    else {
        comparison = false;
    }
    console.log(`Compared and it is ${comparison}`);

    /////////////////////////////////////////////////////////////
/////expected output is "Compared and it is true"
