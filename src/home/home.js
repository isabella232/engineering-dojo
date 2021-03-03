import {
    Link
} from "react-router-dom";

export default function Home(){
    return <>
            <h1>You strive to get better, don't you?</h1>
            <h2>But "getting better" is so subjective. How can one even know or tell others what better is? Instead, we tried to be helpful. </h2>
            <h2>We’ll share with you ideas, concepts, frameworks and resources that can help you level up as a Software Engineer. </h2>

            <div className="call-to-action">
                <Link to="/questionnaire"><button> I’m ready, show me </button></Link>
                <label>all free, no emails, no BS. We’re Engineers.</label>
            </div>

            <h2> From the creators of other fun things </h2>

            <div className="card-group">
                <div className="card"> softwareArchitectureAddict.com </div>
                <div className="card"> Forker video </div>
                <div className="card"> Chuckwho.com </div>
            </div>
        </>;
}
