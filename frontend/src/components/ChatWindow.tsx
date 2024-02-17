import { useRecoilValue } from "recoil"
import { chatsAtom } from "../store/atoms/chatsAtom"
import { Chat } from "./Chat"

export function ChatWindow() {

    const chats = useRecoilValue(chatsAtom)

    return <div className="chat-window border-2 border-black rounded-xl w-[500px] h-[600px] bg-zinc-100">
        {chats.map((chat: any) => chat.value != null && <Chat key={chat.id} chat={chat.value}></Chat>)}
    </div>
}