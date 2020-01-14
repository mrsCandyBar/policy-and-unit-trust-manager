import { ThunkAction } from 'redux-thunk';
import { ActionCreator, Dispatch } from 'redux';

export const getSlides = "@@medicalAid/GET";
export const updateSlide = "@@medicalAid/UPDATE";
export const addSlide = "@@medicalAid/ADD";
export const removeSlide = "@@medicalAid/REMOVE";

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

export interface IMedicalAidReadActions {
    getSlides(): void;
}

export interface IMedicalAidWriteActions {
    updateSlide(slideNo: number): void;
    addSlide(slide: any): void;
    removeSlide(slideNo: number): void;
}

export type MedicalAidActions = IMedicalAidReadActions & IMedicalAidWriteActions;