import { atom } from "recoil";

export const chatsAtom = atom({
    key: 'chatsAtom',
    default: [{
        id: null as string | null,
        value: null as string | null
    }]
})