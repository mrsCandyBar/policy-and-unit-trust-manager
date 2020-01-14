
import { merge, findIndex } from 'lodash';
import {
    getLifeInsuranceList,
    getLifeInsuranceListAction,
    selectLifeInsurance,
    selectLifeInsuranceAction,
    updateLifeInsurance,
    updateLifeInsuranceAction,
    addLifeInsurance,
    addLifeInsuranceAction,
    deleteLifeInsurance,
    deleteLifeInsuranceAction,
    LifeInsuranceActions
} from './actions/lifeInsuranceActions';
import LifeInsurance from '../models/lifeInsurance';

export interface ILifeInsuranceStoreState {
    lifeInsuranceList: Array<LifeInsurance>,
    selectedLifeInsurance?: LifeInsurance
}

const initialState: ILifeInsuranceStoreState = {
    lifeInsuranceList: [],
    selectedLifeInsurance: undefined
}

export const actionCreators = {
    getLifeInsuranceList: getLifeInsuranceListAction,
    selectLifeInsurance: selectLifeInsuranceAction,
    updateLifeInsurance: updateLifeInsuranceAction,
    addLifeInsurance: addLifeInsuranceAction,
    deleteLifeInsurance: deleteLifeInsuranceAction,
}

export function reducer(state: ILifeInsuranceStoreState = initialState, action: any) {
    switch (action.type) {
        case getLifeInsuranceList:
            return merge({}, { ...state, lifeInsuranceList: action.data });

        case selectLifeInsurance:
            return merge({}, { ...state, selectedLifeInsurance: action.data });

        case updateLifeInsurance:
            if (state.selectedLifeInsurance) {
                const selectedIndex = findIndex( state.lifeInsuranceList, { id: state.selectedLifeInsurance.id } );
                let updateLifeInsuranceList = state.lifeInsuranceList;
                updateLifeInsuranceList[selectedIndex] = action.data;

                return merge({}, { ...state, lifeInsuranceList: updateLifeInsuranceList });
            } else {
                return state;
            }

        case addLifeInsurance:
            return merge({}, { ...state, lifeInsuranceList: [...state.lifeInsuranceList, new LifeInsurance()] });

        case deleteLifeInsurance:
            const selectedIndex = findIndex( state.lifeInsuranceList, { id: action.data } );
            const updateLifeInsuranceList = [...state.lifeInsuranceList];
            updateLifeInsuranceList.splice(selectedIndex, 1);

            return merge({}, { ...state, lifeInsuranceList: updateLifeInsuranceList });

        default:
            return state;
    }
}

export type LifeInsuranceStoreState = ILifeInsuranceStoreState & LifeInsuranceActions