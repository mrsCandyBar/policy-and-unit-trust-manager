import { ThunkAction } from 'redux-thunk';
import { ActionCreator, Dispatch } from 'redux';
import MedicalAid from '../../models/medicalAid';

export const getMedicalAidList = "@@medicalAid/GET";
export const selectMedicalAid = "@@medicalAid/SELECT";
export const updateMedicalAid = "@@medicalAid/UPDATE";
export const addMedicalAid = "@@medicalAid/ADD";
export const deleteMedicalAid = "@@medicalAid/REMOVE";

export const getMedicalAidListAction: ActionCreator<ThunkAction<any, any, void, any>> = () => {
    return(dispatch: Dispatch<any>) => dispatch({type: getMedicalAidList, data: [new MedicalAid()] })
}

export const selectMedicalAidAction: ActionCreator<ThunkAction<any, any, void, any>> = (slideNo: number) => {
    return(dispatch: Dispatch<any>) => dispatch({type: selectMedicalAid, data: slideNo })
}

export const updateMedicalAidAction: ActionCreator<ThunkAction<any, any, void, any>> = (medicalAid: MedicalAid) => {
    return(dispatch: Dispatch<any>) => dispatch({type: updateMedicalAid, data: MedicalAid })
}

export const addMedicalAidAction: ActionCreator<ThunkAction<any, any, void, any>> = () => {
    return(dispatch: Dispatch<any>) => dispatch({type: addMedicalAid })
}

export const deleteMedicalAidAction: ActionCreator<ThunkAction<any, any, void, any>> = (medicalAidId: string) => {
    return(dispatch: Dispatch<any>) => dispatch({type: deleteMedicalAid, data: medicalAidId })
}

export interface IMedicalAidReadActions {
    getMedicalAidList(): void;
    selectMedicalAid(medicalAid: MedicalAid): void;
}

export interface IMedicalAidWriteActions {
    updateMedicalAid(medicalAid: MedicalAid): void;
    addMedicalAid(): void;
    deleteMedicalAid(medicalAidId: string): void;
}

export type MedicalAidActions = IMedicalAidReadActions & IMedicalAidWriteActions;