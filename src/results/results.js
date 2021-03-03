import resultsJson from './career_ladder.json';
import {Link, useParams} from "react-router-dom";
import './results.css'

export default function Results(props){
    const { level, topic } = useParams();
    const { Topics, Ladder } = resultsJson["Ladder"][topic];

    const roleToEnglish = level.split("-").join(" ");
    const [roleToForterRoles] = Object.entries(resultsJson.Meta.Dans).find(item => {
        return (item[1].name || '')?.toLowerCase() === roleToEnglish.toLowerCase()
    }) || [];

    const roleNumber = roleToForterRoles.slice(-1); // assuming we're 0-9

    let isLastLevel = false;
    let nextForterLevel, data, nextForterLevelToEnglish, antiPatterns, Examples, Responsibilities, Resources;
    try{
        [[nextForterLevel, data]] = Object.entries(Ladder[roleNumber]) ;
        nextForterLevelToEnglish = resultsJson.Meta.Dans[nextForterLevel].name.split(" ").join("-").toLowerCase();
        Examples = data.Examples;
        Responsibilities = data.Responsibilities;
        Resources = data.Resources;
        antiPatterns = data["Anti-Patterns"];
    }
    catch(e){
        isLastLevel = true;
    }




    return <div className="results">
        <h1>{roleToEnglish}</h1>
        {!isLastLevel ? <>
            <h2>Examples</h2>
            <div className="examples">{Examples.map(example => <div className="example">{example}</div>)}</div>

            <h2>Anti Pattern</h2>
            <div className="anti-patterns">
                {antiPatterns.map(({'anti-pattern': antiPattern, remedy}) => <div className="anti-pattern-block">
                    <div className="anti-pattern">{antiPattern}</div>
                    <div className="remedy">{remedy}</div>
                </div>)}
            </div>

            <h2>Responsibilities</h2>
            <div className="responsibilities">{Responsibilities.map(responsibility => <div className="responsibility">{responsibility}</div>)}</div>
            {Resources ? <div>JSON.stringify(Resources)</div> : ''}
            <Link className="next-level" to={`/results/${topic}/${nextForterLevelToEnglish}`}>NEXT LEVEL</Link>
        </> : <>

        HORRAY! YOURE A UNICORN!
            <img style={{"width": "142px"}} src="https://i.imgur.com/lWbAf2A.png" />
        </>}
    </div>
}
