import { ThunkAction } from 'redux-thunk';
import { ActionCreator, Dispatch } from 'redux';
import UnitTrust from '../../models/unitTrust';

export const getUnitTrustList = "@@unitTrust/GET";
export const selectUnitTrust = "@@unitTrust/SELECT";
export const updateUnitTrust = "@@unitTrust/UPDATE";
export const addUnitTrust = "@@unitTrust/ADD";
export const deleteUnitTrust = "@@unitTrust/REMOVE";

export const getUnitTrustListAction: ActionCreator<ThunkAction<any, any, void, any>> = () => {
    // This is where you place your requests for data from the server : GET
    return (dispatch: Dispatch<any>) => dispatch({
        type: getUnitTrustList, data: [new UnitTrust({
            lumpSumContribution: 20000,
            debitOrder: {
                day: "1",
                amount: 1000
            },
            title: "Open a new Unit Trust",
            fundName: "Nedgroup Core Accelarated",
            startMonth: "2019-07-01",
            actionType: "new-ut"
        })]
    })
}

export const selectUnitTrustAction: ActionCreator<ThunkAction<any, any, void, any>> = (unitTrust?: UnitTrust) => {
    return (dispatch: Dispatch<any>) => dispatch({ type: selectUnitTrust, data: unitTrust })
}

export const updateUnitTrustAction: ActionCreator<ThunkAction<any, any, void, any>> = (unitTrust: UnitTrust) => {
    // This is where you place your requests for data from the server : POST / PUT
    return (dispatch: Dispatch<any>) => dispatch({ type: updateUnitTrust, data: unitTrust })
}

export const addUnitTrustAction: ActionCreator<ThunkAction<any, any, void, any>> = () => {
    return (dispatch: Dispatch<any>) => dispatch({ type: addUnitTrust })
}

export const deleteUnitTrustAction: ActionCreator<ThunkAction<any, any, void, any>> = (unitTrustId: string) => {
    // This is where you place your requests for data from the server : DELETE
    return (dispatch: Dispatch<any>) => dispatch({ type: deleteUnitTrust, data: unitTrustId })
}

export interface IUnitTrustReadActions {
    getUnitTrustList(): void;
    selectUnitTrust(unitTrust?: UnitTrust): void;
}

export interface IUnitTrustWriteActions {
    updateUnitTrust(unitTrust: UnitTrust): void;
    addUnitTrust(): void;
    deleteUnitTrust(unitTrustId: string): void;
}

export type UnitTrustActions = IUnitTrustReadActions & IUnitTrustWriteActions;