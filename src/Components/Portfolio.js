import React, { Component } from 'react';
import { Popup, Grid ,Message, Segment} from 'semantic-ui-react';
class Portfolio extends Component {
  render() {

    if (this.props.data) {
      
      const GridPorjectItems = (projects) =>(
        <Segment>
        <Message  info header={projects.projectTitle} content={projects.projectDescription} />
        <Grid columns='equal' padded celled='internally'>
           <Grid.Row  key={-1}>
              <Grid.Column>TITLE</Grid.Column>
              <Grid.Column>SKILLS</Grid.Column>
            </Grid.Row>
          {projects.itemsproject.map((item,index) => (
            <Grid.Row  key={index}>
              <Grid.Column>{item.title}</Grid.Column>
              <Grid.Column>{item.skills}</Grid.Column>
            </Grid.Row>
          ))}
        </Grid>
        </Segment>
      )

      const imageRender = (projects) =>{return (
        <a href={projects.url} target="_blank" title={projects.title}>
          <img alt={projects.title} src={'images/portfolio/' + projects.image} />
          <div className="overlay">
            <div className="portfolio-item-meta">
              <h5>{projects.title}</h5>
              <p>{projects.category}</p>
            </div>
          </div>
          <div className="link-icon"><i className="fa fa-link"></i></div>
        </a>
      )}
      var projects = this.props.data.projects.map(function (projects) {

        return <div key={projects.title} className="columns portfolio-item">
          <div className="item-wrap">

            {!projects.url && 
            <Popup on='click' wide trigger={imageRender(projects)}>
              {GridPorjectItems(projects)}
            </Popup>}

            {projects.url && imageRender(projects)}

          </div>
        </div>
      })
    }

    return (
      <section id="portfolio">

        <div className="row">

          <div className="twelve columns collapsed">

            <h1>Check Out Some of My Works.</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              {projects}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
