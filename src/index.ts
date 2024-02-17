import { MessageService } from "./services/message";

function main() {
    const message = new MessageService("Hello World").getMessage("Sango");
    console.log(message)
}

main()
