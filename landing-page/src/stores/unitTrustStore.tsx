
import { merge, findIndex } from 'lodash';
import {
    getUnitTrustList,
    getUnitTrustListAction,
    selectUnitTrust,
    selectUnitTrustAction,
    updateUnitTrust,
    updateUnitTrustAction,
    addUnitTrust,
    addUnitTrustAction,
    deleteUnitTrust,
    deleteUnitTrustAction,
    UnitTrustActions
} from './actions/unitTrustActions';
import UnitTrust from '../models/unitTrust';

export interface IUnitTrustStoreState {
    unitTrustList: Array<UnitTrust>,
    selectedUnitTrust?: UnitTrust
}

const initialState: IUnitTrustStoreState = {
    unitTrustList: [],
    selectedUnitTrust: undefined
}

export const actionCreators = {
    getUnitTrustList: getUnitTrustListAction,
    selectUnitTrust: selectUnitTrustAction,
    updateUnitTrust: updateUnitTrustAction,
    addUnitTrust: addUnitTrustAction,
    deleteUnitTrust: deleteUnitTrustAction,
}

export function reducer(state: IUnitTrustStoreState = initialState, action: any) {
    switch (action.type) {
        case getUnitTrustList:
            return merge({}, { ...state, unitTrustList: action.data });

        case selectUnitTrust:
            return merge({}, { ...state, selectedUnitTrust: action.data });

        case updateUnitTrust:
            if (state.selectedUnitTrust) {
                const selectedIndex = findIndex( state.unitTrustList, { id: state.selectedUnitTrust.id } );
                let updateUnitTrustList = state.unitTrustList;
                updateUnitTrustList[selectedIndex] = action.data;

                return merge({}, { ...state, unitTrustList: updateUnitTrustList });
            } else {
                return state;
            }

        case addUnitTrust:
            return merge({}, { ...state, unitTrustList: [...state.unitTrustList, new UnitTrust()] });

        case deleteUnitTrust:
            const selectedIndex = findIndex( state.unitTrustList, { id: action.data } );
            const updateUnitTrustList = [...state.unitTrustList];
            updateUnitTrustList.splice(selectedIndex, 1);

            return merge({}, { ...state, unitTrustList: updateUnitTrustList });

        default:
            return state;
    }
}

export type UnitTrustStoreState = IUnitTrustStoreState & UnitTrustActions