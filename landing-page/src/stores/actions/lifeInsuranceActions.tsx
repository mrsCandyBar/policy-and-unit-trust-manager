import { ThunkAction } from 'redux-thunk';
import { ActionCreator, Dispatch } from 'redux';

export const getSlides = "@@lifeInsurance/GET";
export const updateSlide = "@@lifeInsurance/UPDATE";
export const addSlide = "@@lifeInsurance/ADD";
export const removeSlide = "@@lifeInsurance/REMOVE";

export const getSlidesAction: ActionCreator<ThunkAction<any, any, void, any>> = () => {
    return(dispatch: Dispatch<any>) => dispatch({type: getSlides, data: ["hello there", "second slide","third slide"] })
}

export const updateSlideAction: ActionCreator<ThunkAction<any, any, void, any>> = (slideNo: number) => {
    return(dispatch: Dispatch<any>) => dispatch({type: updateSlide, data: slideNo })
}

export const addSlideAction: ActionCreator<ThunkAction<any, any, void, any>> = (slide:any) => {
    return(dispatch: Dispatch<any>) => dispatch({type: addSlide, data: slide })
}

export const removeSlideAction: ActionCreator<ThunkAction<any, any, void, any>> = (slideNo:number) => {
    return(dispatch: Dispatch<any>) => dispatch({type: removeSlide, data: slideNo })
}

export interface ILifeInsuranceReadActions {
    getSlides(): void;
}

export interface ILifeInsuranceWriteActions {
    updateSlide(slideNo: number): void;
    addSlide(slide: any): void;
    removeSlide(slideNo: number): void;
}

export type LifeInsuranceActions = ILifeInsuranceReadActions & ILifeInsuranceWriteActions;