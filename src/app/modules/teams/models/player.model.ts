import { deserialize} from 'cerialize';

export class Player{
    @deserialize
    nick?: string;

    @deserialize
    _id?: string;
    
    @deserialize
    name?: string;

    @deserialize
    surname?: string;

    @deserialize
    email?: string;

    constructor(nick: string) {
        this.nick = nick;
    }
}