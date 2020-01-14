import DebitOrder from './debitOrder';

class MedicalAid {
  constructor(obj?: any) {
    this.lumpSumContribution = obj && obj.lumpSumContribution ? obj.lumpSumContribution : 0;
    this.debitOrder = obj && obj.debitOrder ? obj.debitOrder : new DebitOrder();
    this.title = obj && obj.title ? obj.title : 'Open a new Unit Trust';
    this.fundName = obj && obj.fundName ? obj.fundName : '';
    this.startMonth = obj && obj.startMonth ? obj.startMonth : new Date().getMonth();
    this.actionType = obj && obj.actionType ? obj.actionType : 'new-ut'; 
  }

  public lumpSumContribution: Number;
  public debitOrder: DebitOrder;
  public title: string;
  public fundName: string;
  public startMonth: string;
  public actionType: string; // I don't think this belongs in a model but as it is part of the example recieved so I'm placing it here
}

export default MedicalAid;