
import { merge } from 'lodash';
import {
    getSlides,
    getSlidesAction,
    updateSlide,
    updateSlideAction,
    addSlide,
    addSlideAction,
    removeSlide,
    removeSlideAction,
    LifeInsuranceActions
} from './actions/lifeInsuranceActions';

export interface ILifeInsuranceStoreState {
    activeSlide: number,
    numberOfSlides: number,
    slideContent: Array<any>
}

const initialState:ILifeInsuranceStoreState = {
    activeSlide: 0,
    numberOfSlides: 5,
    slideContent: []
}

export const actionCreators = {
    getSlides: getSlidesAction,
    updateSlide: updateSlideAction,
    addSlide: addSlideAction,
    removeSlide: removeSlideAction,
}

export function reducer(state:ILifeInsuranceStoreState = initialState, action:any) {
    switch (action.type) {
        case getSlides:
            return merge({}, { ...state, slideContent: action.data });

        case updateSlide:
            return merge({}, { ...state, activeSlide: action.data });

        case addSlide:
            return merge({}, { ...state, slideContent: [ ...state.slideContent, action.data ] });

        case removeSlide:
            const updateSlides = [ ...state.slideContent ];
            updateSlides.splice(action.data, 1);
            return merge({}, { ...state, slideContent: updateSlides });

        default:
            return state;
    }
}

export type LifeInsuranceStoreState = ILifeInsuranceStoreState & LifeInsuranceActions