const uuid = require('react-uuid');

class UniqueIdentifier {
    constructor(obj?: any) {
        this.id = obj && obj.id ? obj.id : uuid(); 
    }

    public id: string;
}

export default UniqueIdentifier;