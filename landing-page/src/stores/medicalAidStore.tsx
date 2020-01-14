
import { merge, findIndex } from 'lodash';
import {
    getMedicalAidList,
    getMedicalAidListAction,
    selectMedicalAid,
    selectMedicalAidAction,
    updateMedicalAid,
    updateMedicalAidAction,
    addMedicalAid,
    addMedicalAidAction,
    deleteMedicalAid,
    deleteMedicalAidAction,
    MedicalAidActions
} from './actions/medicalAidActions';
import MedicalAid from '../models/medicalAid';

export interface IMedicalAidStoreState {
    medicalAidList: Array<MedicalAid>,
    selectedMedicalAid?: MedicalAid
}

const initialState: IMedicalAidStoreState = {
    medicalAidList: [],
    selectedMedicalAid: undefined
}

export const actionCreators = {
    getMedicalAidList: getMedicalAidListAction,
    selectMedicalAid: selectMedicalAidAction,
    updateMedicalAid: updateMedicalAidAction,
    addMedicalAid: addMedicalAidAction,
    deleteMedicalAid: deleteMedicalAidAction,
}

export function reducer(state: IMedicalAidStoreState = initialState, action: any) {
    switch (action.type) {
        case getMedicalAidList:
            return merge({}, { ...state, medicalAidList: action.data });

        case selectMedicalAid:
            return merge({}, { ...state, selectedMedicalAid: action.data });

        case updateMedicalAid:
            if (state.selectedMedicalAid) {
                const selectedIndex = findIndex( state.medicalAidList, { id: state.selectedMedicalAid.id } );
                let updateMedicalAidList = state.medicalAidList;
                updateMedicalAidList[selectedIndex] = action.data;

                return merge({}, { ...state, medicalAidList: updateMedicalAidList });
            } else {
                return state;
            }

        case addMedicalAid:
            return merge({}, { ...state, medicalAidList: [...state.medicalAidList, new MedicalAid()] });

        case deleteMedicalAid:
            const selectedIndex = findIndex( state.medicalAidList, { id: action.data } );
            const updateMedicalAidList = [...state.medicalAidList];
            updateMedicalAidList.splice(selectedIndex, 1);

            return merge({}, { ...state, medicalAidList: updateMedicalAidList });

        default:
            return state;
    }
}

export type MedicalAidStoreState = IMedicalAidStoreState & MedicalAidActions