import { deserialize, deserializeAs} from 'cerialize';
import { Team } from '../../teams/models/team.model';
import { Match } from './match.model';

export class Tournament{

    @deserialize
    _id: string;

    @deserialize
    name: string;

    @deserialize
    startDate: Date;

    @deserialize
    status: string;
    
    @deserialize
    description?: string;

    @deserialize
    game: string;

    @deserialize
    format: string;

    @deserialize
    admin?: string;
    
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

}