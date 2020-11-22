import { deserialize} from 'cerialize';

export class Player{
    @deserialize
    nick?: string;

    @deserialize
    _id?: string;

    constructor(nick: string) {
        this.nick = nick;
    }
}