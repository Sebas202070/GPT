
import { useState } from 'react'


import { TextMessageBox } from '../../components/chat-input-boxes/TextMessageBox'
import { TypingLoader } from '../../components/loaders/TypingLoader'
import { GptMessage } from '../../components/chat-bubbles/GPTMessage';
import { orthographyUseCase } from '../../../core/use-cases/orthographyUseCase';
import { ChatGptOrthography } from '../../components/chat-bubbles/ChatOrthographyGpt';
import { MyMessage } from '../../components/chat-bubbles/MyMessage';



interface Message {
    text: string;
    isGpt: boolean;
    info?: {
      userScore:number,
      errors:string[],
      message:string
    }
  }
  
  
  
  
  export const OrthographyPage = () => {
  
    const [isLoading, setIsLoading] = useState(false);
    const [messages, setMessages] = useState<Message[]>([])
  
  
    const handlePost = async( text: string ) => {
  
      setIsLoading(true);
      setMessages( (prev) => [...prev, { text: text, isGpt: false }] );
  
      const {ok,userScore,message,errors}= await orthographyUseCase(text)
      if(!ok) {
        setMessages( (prev) => [...prev, { text: "No se pudo hacer la correcion", isGpt: true }] );
      } else {
        setMessages( (prev) => [...prev, { text: message, isGpt: true, info:{
          errors:errors,
          userScore:userScore,
          message:message
        } }] );
      }

      console.log(message)
      
      setIsLoading(false);
  
      // Todo: Añadir el mensaje de isGPT en true
  
  
    }
  
  
  
    return (
      <div className="chat-container">
        <div className="chat-messages">
          <div className="grid grid-cols-12 gap-y-2">
            {/* Bienvenida */}
            <GptMessage text="Hola, puedes escribir tu texto en español, y te ayudo con las correcciones" />
  
            {
              messages.map( (message, index) => (
                message.isGpt
                  ? (
                    <ChatGptOrthography
                    key={index}
                    {...message.info!}
                    />
                  )
                  : (
                    <MyMessage key={ index } text={ message.text } />
                  )
                  
              ))
            }
  
            
            {
              isLoading && (
                <div className="col-start-1 col-end-12 fade-in">
                  <TypingLoader />
                </div>
              )
            }
            
  
          </div>
        </div>
  
  
        <TextMessageBox 
          onSendMessage={ handlePost }
          placeholder='Escribe aquí lo que deseas'
          disableCorrections
        />
  
      </div>
    );
  };