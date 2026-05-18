const contains = function(obj, value) {


    function isEqual(currentThingFromObj, valueWeAreLookingFor) {

        if (Number.isNaN(currentThingFromObj) && Number.isNaN(valueWeAreLookingFor)) return true;

        return currentThingFromObj === valueWeAreLookingFor;

    }
    // base case, if we find the thing we need immediately return true 
    for (const current of Object.values(obj)) {
        if (isEqual(current, value)) return true;
    
        // to check if u can search inside the object, if u can then use recursion
        if (typeof current === "object" && current !== null) {
            if(contains(current, value)) return true;
        }
    // base case 2 means we went over the object and found nothing so return false
    }
    return false


};
  
// Do not edit below this line
module.exports = contains;
