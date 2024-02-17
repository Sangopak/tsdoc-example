import {describe, expect, it, beforeAll} from '@jest/globals';
import { MessageService } from "./message";

describe('MessageService', ()=> {
    let messageService: MessageService;
    const inputMessage: string = 'Test Message';
    const inputName: string = 'Test Name';

    beforeAll(() => {
        messageService = new MessageService(inputMessage);
    });

    it('Should validate getMessage return correct message', ()=> {
        expect(messageService.getMessage(inputName)).toBe(`${inputMessage} ${inputName}`);
    })
});