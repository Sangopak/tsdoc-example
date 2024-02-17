export class MessageService {
    private message: string;

    /**
     * Constructor
     * 
     * @param value - input string for greetings
     */
    constructor(private value:string){
        this.message = value;
    }

    /**
     * Simple message function that concates message and name
     * 
     * @param name - first input string
     * @returns {string}
     */
    public getMessage(name: string) : string {
        return `${this.message} ${name}`
    }
}