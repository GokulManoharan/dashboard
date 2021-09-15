import React, { Component } from 'react';
import tableau from 'tableau-api';
 
 
class Tableau extends Component {
  componentDidMount() {
    this.initViz()
  }
 
 
  initViz() {
    const vizUrl = 'http://public.tableau.com/views/RegionalSampleWorkbook/Storms';
    const vizContainer = this.vizContainer;
    let viz = new window.tableau.Viz(vizContainer, vizUrl)
  }
 
 
  render() {
    return (
      <div ref={(div) => { this.vizContainer = div }}>
      </div>
    )
  }
}
 
 
export default Tableau;