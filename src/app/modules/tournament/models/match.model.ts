import { deserialize, deserializeAs } from 'cerialize';
import { Team } from '../../teams/models/team.model';

export class Match{

    @deserialize
    _id: string;

    @deserializeAs(Team)
    team1: Team;

    @deserializeAs(Team)
    team2: Team;

    @deserialize
    winner: number;

}