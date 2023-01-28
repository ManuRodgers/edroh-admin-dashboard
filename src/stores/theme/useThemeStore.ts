import { PaletteMode } from '@mui/material';
import {
  createSelectorHooks,
  ZustandHookSelectors,
} from 'auto-zustand-selectors-hook';
import { create } from 'zustand';

import { myMiddlewares } from '@/stores/middlewares';

export type ThemeState = {
  mode: PaletteMode | null;
};
export type ThemeAction = {
  setMode: (mode: PaletteMode) => void;
};

const initialState: ThemeState = {
  mode: 'light',
};

const useThemeStoreBase = create<ThemeState & ThemeAction>()(
  myMiddlewares<ThemeState, ThemeAction>((set) => ({
    ...initialState,
    setMode: (mode: PaletteMode) =>
      set(
        (state) => {
          state.mode = mode;
        },
        false,
        {
          type: 'theme/setMode',
        }
      ),
  }))
);

export const useThemeStore = createSelectorHooks(
  useThemeStoreBase
) as typeof useThemeStoreBase & ZustandHookSelectors<ThemeState & ThemeAction>;
