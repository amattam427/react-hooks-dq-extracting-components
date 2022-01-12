
import Contacts from "./Contacts"

function ContactList({contacts}){
    const contactArray = contacts.map((contact)=>{
        return(
            <Contacts
                key={contact.id}
                name={contact.name}
            />
        )
    })
    
    return(
        <nav>
            <h2>Contacts</h2>
            <ul className="contacts">{contactArray}</ul>
        </nav>
    )
    
    
    
}
export default ContactList;