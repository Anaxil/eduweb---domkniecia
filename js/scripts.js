function createData(obj) {
    
        var data = obj;

        return {
            set: function(name, value) {
                data[name] = value;
            },
            get: function(name) {
                return data[name];
            }
        }
    
    }
    
    var data = createData({});
    
    data.set("name", "Janek");
    
    console.log( data.get("name") );;