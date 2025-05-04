import {create} from 'zustand';
import {combine} from 'zustand/middleware';

const useCounterStore = create(
  combine({count: 0}, set => ({
    increase: (by: number) => set(state => ({count: state.count + by})),
    decrease: (by: number) => set(state => ({count: state.count - by})),
    reset: () => set(() => ({count: 0})),
  })),
);
