import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';
import { useDispatch, useSelector } from 'react-redux';

import store, { RootStateType } from '../redux/store';
import { TypedUseSelectorHook } from 'react-redux';

//Типизирование Action
type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never;

export type ActionsTypes<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<
  InferValueTypes<T>
>;

//Типизирование Thnuk
export type ThunkType<A extends Action, R = Promise<void>> = ThunkAction<
  R,
  RootStateType,
  unknown,
  A
>;

//Типизация dispatch для корректной работы с thunk в react-redux v.>8
type AppAction = ReturnType<typeof store.dispatch>;
export type AppDispatch = ThunkDispatch<RootStateType, any, AppAction>;
export const useAppDispatch = () => useDispatch<AppDispatch>();

//Типизация useSelector
export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector;
