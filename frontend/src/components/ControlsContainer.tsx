import { useSetRecoilState } from "recoil";
import { Controls } from "./Controls";
import { chatsAtom } from "../store/atoms/chatsAtom";

export function ControlsContainer() {
    
    const addChat = useSetRecoilState(chatsAtom)

    return <div className="controls-container border border-black flex flex-col gap-4 w-[500px] rounded-xl">
        <Controls buttonName={'Send'} inputLabel={'Message'} clickHandler={addChat}></Controls>
        <Controls buttonName={'Join'} inputLabel={'Room ID'}></Controls>
    </div>
}

