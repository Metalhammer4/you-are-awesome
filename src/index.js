
// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (propertyName) => propertyName;

const createNotEnumerableProperty = (propertyName) => Symbol(propertyName);

const createProtoMagicObject = () => {
    let object = new Function;
    object.prototype = Object.getPrototypeOf(object);

    return object;
};

const incrementor = () => {
    incrementor.value = incrementor.value || 0;
    
    function increm() {
        incrementor.value++;
        return increm;
    }
    increm.toString = () => {
        incrementor.value++;
        return incrementor.value;
    };

    return increm;
};

const asyncIncrementor = () => {
    asyncIncrementor.value = asyncIncrementor.value || 0;

    return new Promise((resolve, reject) => resolve(++asyncIncrementor.value));
}

const createIncrementer = () => {
    const inc = function*() {
        let value = 0;
        while(true)
            yield ++value;
    }

    return inc();     
};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (valueBack) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {resolve(valueBack);}, 1000);
        setTimeout(() => {reject(new Error("Time is Over!"));}, 2000);     
    });
};

const getDeepPropertiesCount = (object) => {
    let count = Object.getOwnPropertyNames(object).length;
    for(let key of Object.getOwnPropertyNames(object))
        if(Object.getOwnPropertyNames(object[key]).length > 0)
            count += getDeepPropertiesCount(object[key]);  
    
    return count;
};

const createSerializedObject = () =>  {
    return new String(JSON.stringify({someNumber:123}));
}

const sortByProto = (array) => array.sort();

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;