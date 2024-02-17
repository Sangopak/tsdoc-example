export class MessageService {
    private message: string;

    constructor(private value:string){
        this.message = value;
    }

    public getMessage(name: string) : string {
        return `${this.message} ${name}`
    }
}