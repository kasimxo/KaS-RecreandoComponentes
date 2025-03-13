import {View, Text} from 'react-native'
import { createContext, ReactNode, useState } from 'react'
import {styles} from './styles'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import GenerateData from '../data'

export const MsgContext = createContext<ChatContextProps|undefined>(undefined)
export const MsgProvider = ({children, orgMsgs = []}:{children: ReactNode, orgMsgs?: any[]}) => {
    const [messages, setMessages] = useState<Message[]>(orgMsgs)
    const sendMessage = (text: string) => {
        const newMessage: Message = {
          date: new Date(),
          user: "Yo",
          content: text,
        };
        setMessages([...messages, newMessage]);
    }
    return (
        <MsgContext.Provider
            value={{
                messages, sendMessage
            }}>
                {children}
            </MsgContext.Provider>
    )
}

export default function Target(){
    const data = GenerateData();
    return (
        <MsgProvider orgMsgs={GenerateData().messages}>
            <View style={styles.container}>
                <Header />
                <Main />
                <Footer />
            </View>
        </MsgProvider>
    )
}

type ChatLog = {
    messages: Message[]
}

type Message = {
    date: Date,
    user: string,
    content: string
}

interface ChatContextProps {
  messages: Message[];
  sendMessage: (text: string) => void;
}