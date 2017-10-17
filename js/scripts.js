function createData(obj) {

    var data = obj;

    return {
        set: function (name, value) {
            if (name && value) {
                data[name] = value;
            } else {
                console.log("nie podano poprawnych wartości");
            }
        },
        get: function (name) {
            return data[name];
        }
    }

}

var data = createData({});

data.set("name", "Janek");

console.log(data.get("name"));;