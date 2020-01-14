import UniqueIdentifier from './indentifier';

class UnitTrust extends UniqueIdentifier {
    constructor(obj?: any) {
        super(obj);
        this.label = obj && obj.label ? obj.label : 'New medical aid';
        this.maPlanOption = obj && obj.maPlanOption ? obj.maPlanOption : '';
        this.rewardsProgram = obj && obj.rewardsProgram ? obj.rewardsProgram : false;
        this.coverStartDate = obj && obj.coverStartDate ? obj.coverStartDate : new Date();
        this.actionType = obj && obj.actionType ? obj.actionType : 'new-medical-aid'; 
    }

    public label: string;
    public maPlanOption: string;
    public rewardsProgram: boolean;
    public coverStartDate: Date;
    public actionType: string; // I don't think this belongs in a model but as it is part of the example recieved so I'm placing it here
}

export default UnitTrust;