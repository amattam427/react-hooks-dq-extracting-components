
import MessagesForm from './MessagesForm';
import Messages from './Messages';

function MessagesList({messages}){
    const messageArray = messages.map((message)=>{
        return(
            <Messages
                key={message.id}
                type={message.type}
                name={message.name}
                content={message.content}
            />
        )
    })
    return(
        <main>
            <h2>Messages</h2>
            <section className="messages">
               <ul>{messageArray}</ul>
            </section>
            <MessagesForm/>
        </main>
    )
        
    
}

export default MessagesList;