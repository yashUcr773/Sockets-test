import { useEffect } from "react";
import { ChatWindow } from "./ChatWindow";
import { ControlsContainer } from "./ControlsContainer";

export function Main() {

    useEffect(() => {

        console.log('mount')
        return () => {

            console.log('unmount')
        }
    }, [])

    return <main className="main w-full h-full flex flex-col gap-8 justify-center items-center my-8">
        <ChatWindow />
        <ControlsContainer />
    </main>
}