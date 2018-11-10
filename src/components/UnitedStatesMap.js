import React, { Component } from 'react'
import USAMap from 'react-usa-map'

class UnitedStatesMap extends Component {
  statesCustomConfig = () => ({
    AL: {
      // fill: '#050515',
    },
    AK: {
      fill: '#006600',
    },
    AZ: {
      fill: '#62D256',
    },
    AR: {
      fill: '#62D256',
    },
    CA: {
      fill: '#006600',
    },
    CO: {
      fill: '#006600',
    },
    CT: {
      fill: '#62D256',
    },
    DE: {
      fill: '#62D256',
    },
    FL: {
      fill: '#62D256',
    },
    GA: {
      // fill: '#050515',
    },
    HI: {
      fill: '#62D256',
    },
    ID: {
      // fill: '#050515',
    },
    IL: {
      fill: '#62D256',
    },
    IN: {
      // fill: '#050515',
    },
    IA: {
      // fill: '#050515',
    },
    KS: {
      // fill: '#050515',
    },
    KY: {
      // fill: '#050515',
    },
    LA: {
      fill: '#62D256',
    },
    ME: {
      fill: '#006600',
    },
    MD: {
      fill: '#62D256',
    },
    MA: {
      fill: '#006600',
    },
    MI: {
      fill: '#006600',
    },
    MN: {
      fill: '#62D256',
    },
    MS: {
      // fill: '#050515',
    },
    MO: {
      fill: '#62D256',
    },
    MT: {
      fill: '#62D256',
    },
    NE: {
      // fill: '#050515',
    },
    NV: {
      fill: '#006600',
    },
    NH: {
      fill: '#62D256',
    },
    NJ: {
      fill: '#62D256',
    },
    NM: {
      fill: '#62D256',
    },
    NY: {
      fill: '#62D256',
    },
    NC: {
      // fill: '#050515',
    },
    ND: {
      fill: '#62D256',
    },
    OH: {
      fill: '#62D256',
    },
    OK: {
      fill: '#62D256',
    },
    OR: {
      fill: '#006600',
    },
    PA: {
      fill: '#62D256',
    },
    RI: {
      fill: '#62D256',
    },
    SC: {
      // fill: '#050515',
    },
    SD: {
      // fill: '#050515',
    },
    TN: {
      // fill: '#050515',
    },
    TX: {
      // fill: '#050515',
    },
    UT: {
      fill: '#62D256',
    },
    VT: {
      fill: '#006600',
    },
    VA: {
      // fill: '#050515',
    },
    WA: {
      fill: '#006600',
    },
    WV: {
      fill: '#62D256',
    },
    WI: {
      // fill: '#050515',
    },
    WY: {
      // fill: '#050515',
    },
  });

  render () {
    return (
      <div className="map">
        <h1>Marijuana Legalization Map:</h1>
        <USAMap
          className="map"
          customize={this.statesCustomConfig()}
          tooltip="true"
        />

        <p><span><b>Last Updated:</b> 11/07/2018</span></p>
        <br></br>
        <div className="legend">
          <p>Medicinal & Recreational Legal (Dark Green)</p>
          <p>Medicinal Legal (Light Green)</p>
          <p>No legalization (Grey)</p>
        </div>
      </div>
    )
  }
}

export default UnitedStatesMap
