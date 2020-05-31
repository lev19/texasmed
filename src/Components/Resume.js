import React, { Component } from 'react';
import { Divider } from 'semantic-ui-react';
class Resume extends Component {
  render() {

    if (this.props.data) {
      var skillmessage = this.props.data.skillmessage;
      var educationTitle = this.props.data.educationTitle;
      var education = this.props.data.education.map(function (education) {
        return <div key={education.school}><h3>{education.school}</h3>
          <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
          <p>{education.description}</p></div>
      })
      var workTitle = this.props.data.workTitle;
      var work = this.props.data.work.map(function (work) {
        return <div key={work.company}><h3>{work.company}</h3>
          <a href={work.website} target="_blank" >{work.website}</a>
          <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
          <p>{work.description}</p>
          <Divider />
        </div>
      });
      var imagingTitle = this.props.data.imagingTitle;
      var imaging = this.props.data.imaging.map(function (imaging) {
        return <div key={imaging.title}><h3>{imaging.title}</h3>
          <a href={imaging.website} target="_blank" >{imaging.website}</a>
          <p className="info">{imaging.title}<span>&bull;</span> <em className="date">{imaging.years}</em></p>
          <p>{imaging.description}</p>
          <Divider />
        </div>
      });
      var skills = this.props.data.skills.map(function (skills) {
        var className = 'bar-expand ' + skills.name.toLowerCase();
        return <li key={skills.name}><span style={{ width: skills.level }} className={className}></span><em>{skills.name}</em></li>
      })
    }

    return (
      <section id="resume">

        <div className="row education">
          <div className="three columns header-col">
            <h1><span>{educationTitle}</span></h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                {education}
              </div>
            </div>
          </div>
        </div>


        <div className="row work">

          <div className="three columns header-col">
            <h1><span>{workTitle}</span></h1>
          </div>

          <div className="nine columns main-col">
            {work}
          </div>
        </div>

        <div className="row work">

          <div className="three columns header-col">
            <h1><span>{imagingTitle}</span></h1>
          </div>

          <div className="nine columns main-col">
            {imaging}
          </div>
        </div>

        <div className="row skill">

          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
          </div>

          <div className="nine columns main-col">

            <p>{skillmessage}
            </p>

            <div className="bars">
              <ul className="skills">
                {skills}
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;
