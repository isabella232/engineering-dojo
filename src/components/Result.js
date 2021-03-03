import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';
import Squircle from "./squircle";
import './Result.css';
import {Link} from 'react-router-dom';

function createLink(){

}

function Result(props) {
  const parsedRole = props.quizResult.toLowerCase().split(" ").join("-");
  return (
    <CSSTransitionGroup
      className="container result"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}
    >
      <div className="result-end">
        <h2>You Are a <strong>{props.quizResult}</strong>!</h2>
        <h4>In other teams, it may be called X, Y, Z</h4>
        <h3>Curious to see what it means?</h3>

        <div className="squircles">
          <Link to={`/results/engineering-craftsmanship/${parsedRole}`}>
            <div className="squircle">
            <Squircle width="150" roundness="1" color="#ff6b6b"></Squircle>
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                 className="feather feather-code">
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
            <span>Engineering Craftsmanship</span>
            </div>
          </Link>
          <Link to={`/results/project-leadership/${parsedRole}`}>
          <div className="squircle">
            <Squircle width="150" roundness="1" color="#fcc419"></Squircle>
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                 className="feather feather-users">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
            <span>Project Leadership</span>
          </div>
          </Link>
          <Link to={`/results/business-involvement/${parsedRole}`}>
          <div className="squircle">
            <Squircle width="150" roundness="1" color="#94d82d"></Squircle>
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                 className="feather feather-bar-chart">
              <line x1="12" y1="20" x2="12" y2="10"></line>
              <line x1="18" y1="20" x2="18" y2="4"></line>
              <line x1="6" y1="20" x2="6" y2="16"></line>
            </svg>
            <span>Business Involvement</span>
          </div>
          </Link>
          <Link to={`/results/organizational-impact/${parsedRole}`}>
          <div className="squircle">
            <Squircle width="150" roundness="1" color="#339af0"></Squircle>
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                 className="feather feather-briefcase">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
            </svg>
            <span>Organizational Impact</span>
          </div>
          </Link>

        </div>

</div>
    </CSSTransitionGroup>
  );
}

Result.propTypes = {
  quizResult: PropTypes.string.isRequired
};

export default Result;
