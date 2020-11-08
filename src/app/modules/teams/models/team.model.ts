import { Player } from './player.model';
import { deserialize, deserializeAs } from 'cerialize';

export class Team{

    @deserialize
    name: string;

    @deserializeAs(Player)
    captain: Player;

    @deserializeAs(Player)
    players: Player[];

    isCaptain?: boolean;

}