import create from "zustand"
import { devtools } from 'zustand/middleware'

interface INavStore {
    screen: string,
    setScreen: (value: string) => void
}


export const useNavStore = create<INavStore>()(
    devtools(
        (set) => ({
            screen: 'home',
            setScreen: (value) => set((state) => ({screen: state.screen = value}))
        })
    )
)