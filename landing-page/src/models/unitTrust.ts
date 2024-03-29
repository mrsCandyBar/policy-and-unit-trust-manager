import UniqueIdentifier from './indentifier';
import DebitOrder from './debitOrder';

class UnitTrust extends UniqueIdentifier {
    constructor(obj?: any) {
        super(obj);
        this.lumpSumContribution = obj && obj.lumpSumContribution ? obj.lumpSumContribution : 0;
        this.debitOrder = obj && obj.debitOrder ? obj.debitOrder : new DebitOrder();
        this.title = obj && obj.title ? obj.title : 'Open a new Unit Trust';
        this.fundName = obj && obj.fundName ? obj.fundName : '';
        this.startMonth = obj && obj.startMonth ? obj.startMonth : new Date();
        this.actionType = obj && obj.actionType ? obj.actionType : 'new-ut';
    }

    public lumpSumContribution: Number;
    public debitOrder: DebitOrder;
    public title: string;
    public fundName: string;
    public startMonth: Date;
    public actionType: string; // I don't think this belongs in a model but as it is part of the example recieved so I'm placing it here
}

export default UnitTrust;