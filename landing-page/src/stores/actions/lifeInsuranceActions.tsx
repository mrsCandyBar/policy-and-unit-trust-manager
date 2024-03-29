import { ThunkAction } from 'redux-thunk';
import { ActionCreator, Dispatch } from 'redux';
import LifeInsurance from '../../models/lifeInsurance';

export const getLifeInsuranceList = "@@lifeInsurance/GET";
export const selectLifeInsurance = "@@lifeInsurance/SELECT";
export const updateLifeInsurance = "@@lifeInsurance/UPDATE";
export const addLifeInsurance = "@@lifeInsurance/ADD";
export const deleteLifeInsurance = "@@lifeInsurance/REMOVE";

export const getLifeInsuranceListAction: ActionCreator<ThunkAction<any, any, void, any>> = () => {
    // This is where you place your requests for data from the server : GET
    return (dispatch: Dispatch<any>) => dispatch({
        type: getLifeInsuranceList, data: [new LifeInsurance({
            totalPremium: 1000,
            debitOrder: {
                day: "1",
                amount: 10
            },
            disabilityCover: 1000000,
            disabilityPremium: 100,
            coverStartDate: "2019-09-25",
            incomeProtectionPremium: 300,
            incomeProtectionCover: 3000000,
            criticalIllnessCover: 2000000,
            criticalIllnessPremium: 200,
            label: "New Life Insurance",
            lifeCover: 4000000,
            lifePremium: 400,
            actionType: "new-life-insurance"
        })]
    })
}

export const selectLifeInsuranceAction: ActionCreator<ThunkAction<any, any, void, any>> = (lifeInsurance?: LifeInsurance) => {
    return (dispatch: Dispatch<any>) => dispatch({ type: selectLifeInsurance, data: lifeInsurance })
}

export const updateLifeInsuranceAction: ActionCreator<ThunkAction<any, any, void, any>> = (lifeInsurance: LifeInsurance) => {
    // This is where you place your requests for data from the server : POST / PUT
    return (dispatch: Dispatch<any>) => dispatch({ type: updateLifeInsurance, data: lifeInsurance })
}

export const addLifeInsuranceAction: ActionCreator<ThunkAction<any, any, void, any>> = () => {
    return (dispatch: Dispatch<any>) => dispatch({ type: addLifeInsurance })
}

export const deleteLifeInsuranceAction: ActionCreator<ThunkAction<any, any, void, any>> = (lifeInsuranceId: string) => {
    // This is where you place your requests for data from the server : DELETE 
    return (dispatch: Dispatch<any>) => dispatch({ type: deleteLifeInsurance, data: lifeInsuranceId })
}

export interface ILifeInsuranceReadActions {
    getLifeInsuranceList(): void;
    selectLifeInsurance(lifeInsurance?: LifeInsurance): void;
}

export interface ILifeInsuranceWriteActions {
    updateLifeInsurance(lifeInsurance: LifeInsurance): void;
    addLifeInsurance(): void;
    deleteLifeInsurance(lifeInsuranceId: string): void;
}

export type LifeInsuranceActions = ILifeInsuranceReadActions & ILifeInsuranceWriteActions;