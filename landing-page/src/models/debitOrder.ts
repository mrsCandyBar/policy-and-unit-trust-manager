class DebitOrder {
    constructor(obj?: any) {
        this.day = obj && obj.day ? obj.day : 1;
        this.amount = obj && obj.amount ? obj.amount : 0;
    }

    public day: Number;
    public amount: Number;
}

export default DebitOrder