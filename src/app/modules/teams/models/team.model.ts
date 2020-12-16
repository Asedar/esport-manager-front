import { Player } from './player.model';
import { deserialize, deserializeAs } from 'cerialize';

export class Team{

    @deserialize
    _id: string;

    @deserialize
    name: string;

    @deserializeAs(Player)
    captain: Player;

    @deserializeAs(Player)
    players: Player[];

    isCaptain?: boolean;

    @deserialize
    joinCode?: string

    wins?: number;
    loses?: number;
    winratio?: number;

}