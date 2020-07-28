import { useState, Dispatch, SetStateAction } from 'react';

export type StateHookOutput<State = any> = [
  State,
  Dispatch<SetStateAction<State>>
];

export type StateHookOutputWithGetter<State = any> = [
  State,
  Dispatch<SetStateAction<State>>,
  () => State
];

export type StateHook<State = any> = () => StateHookOutput<State> | StateHookOutputWithGetter<State>;
