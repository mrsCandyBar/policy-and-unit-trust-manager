import { combineReducers } from 'redux'
import * as LifeInsurance from '../lifeInsuranceStore'
import * as MedicalAid from '../medicalAidStore'
import * as UnitTrust from '../unitTrustStore'

export default combineReducers({
  lifeInsurance: LifeInsurance.reducer,
  medicalAid: MedicalAid.reducer,
  unitTrust: UnitTrust.reducer,
});