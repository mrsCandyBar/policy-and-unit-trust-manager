import DebitOrder from './debitOrder';

class LifeInsurance {
    constructor(obj?: any) {
        this.totalPremium = obj && obj.totalPremium ? obj.totalPremium : 0;
        this.debitOrder = obj && obj.debitOrder ? obj.debitOrder : new DebitOrder();
        this.disabilityCover = obj && obj.disabilityCover ? obj.disabilityCover : 0;
        this.disabilityPremium = obj && obj.disabilityPremium ? obj.disabilityPremium : 0;
        this.coverStartDate = obj && obj.coverStartDate ? obj.coverStartDate : new Date();
        this.incomeProtectionPremium = obj && obj.incomeProtectionPremium ? obj.incomeProtectionPremium : 0;
        this.incomeProtectionCover = obj && obj.incomeProtectionCover ? obj.incomeProtectionCover : 0;
        this.criticalIllnessCover = obj && obj.criticalIllnessCover ? obj.criticalIllnessCover : 0;
        this.criticalIllnessPremium = obj && obj.criticalIllnessPremium ? obj.criticalIllnessPremium : 0;
        this.label = obj && obj.label ? obj.label : 'New Life Insurance';
        this.lifeCover = obj && obj.lifeCover ? obj.lifeCover : 0;
        this.lifePremium = obj && obj.lifePremium ? obj.lifePremium : 0;
        this.actionType = obj && obj.actionType ? obj.actionType : 'new-life-insurance';
    }

    public totalPremium: Number;
    public debitOrder: DebitOrder;
    public disabilityCover: Number;
    public disabilityPremium: Number;
    public coverStartDate: Date;
    public incomeProtectionPremium: Number;
    public incomeProtectionCover: Number;
    public criticalIllnessCover: Number;
    public criticalIllnessPremium: Number;
    public label: string;
    public lifeCover: Number;
    public lifePremium: Number;
    public actionType: string;
}

export default LifeInsurance;