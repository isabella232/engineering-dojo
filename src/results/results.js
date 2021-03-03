import resultsJson from './career_ladder.json';
import {Link, useParams} from "react-router-dom";

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




    return <>
        {!isLastLevel ? <>
            <div>{JSON.stringify(antiPatterns)}</div>
            <div>{JSON.stringify(Examples)}</div>
            <div>{JSON.stringify(Responsibilities)}</div>
            <div>{JSON.stringify(Resources)}</div>
        </> : <>

        HORRAY! YOURE A UNICORN!
        </>}
    </>
}
