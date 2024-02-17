import { MessageService } from "./services/message";

/**
 * Main function to call the message service
 * 
 * @param greetings - first input string
 * @param name - second input string
 * @returns {void}
 */
function main(greetings: string, name: string): void {
    const message = new MessageService(greetings).getMessage(name);
    console.log(message)
}

main("Hello!!", "Sango")
