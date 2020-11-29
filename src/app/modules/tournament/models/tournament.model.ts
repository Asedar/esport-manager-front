import { Deserialize, deserialize, deserializeAs} from 'cerialize';
import { Player } from '../../teams/models/player.model';
import { Team } from '../../teams/models/team.model';
import { Match } from './match.model';

export class Tournament{

    @deserialize
    _id: string;

    @deserialize
    name: string;

    @deserialize
    date: Date;

    @deserialize
    status: string;
    
    @deserialize
    description?: string;

    @deserialize
    game: string;

    @deserialize
    format: string;

    @deserializeAs(Player)
    admin?: Player;
    
    @deserializeAs(Team)
    teams?: Team[]

    @deserialize
    isPrivate: boolean;

    @deserialize
    maxTeams: number;

    @deserialize
    playersInTeam?: Number;

    @deserializeAs(Match)
    matches?: Match[];

    @deserialize
    bracket?: any;

    @deserialize
    joinCode?: string;

}