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
      fill: '#00CC00',
    },
    AR: {
      fill: '#00CC00',
    },
    CA: {
      fill: '#006600',
    },
    CO: {
      fill: '#006600',
    },
    CT: {
      fill: '#00CC00',
    },
    DE: {
      fill: '#00CC00',
    },
    FL: {
      fill: '#00CC00',
    },
    GA: {
      // fill: '#050515',
    },
    HI: {
      fill: '#00CC00',
    },
    ID: {
      // fill: '#050515',
    },
    IL: {
      fill: '#00CC00',
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
      fill: '#00CC00',
    },
    ME: {
      fill: '#006600',
    },
    MD: {
      fill: '#00CC00',
    },
    MA: {
      fill: '#006600',
    },
    MI: {
      fill: '#006600',
    },
    MN: {
      fill: '#00CC00',
    },
    MS: {
      // fill: '#050515',
    },
    MO: {
      fill: '#00CC00',
    },
    MT: {
      fill: '#00CC00',
    },
    NE: {
      // fill: '#050515',
    },
    NV: {
      fill: '#006600',
    },
    NH: {
      fill: '#00CC00',
    },
    NJ: {
      fill: '#00CC00',
    },
    NM: {
      fill: '#00CC00',
    },
    NY: {
      fill: '#00CC00',
    },
    NC: {
      // fill: '#050515',
    },
    ND: {
      fill: '#00CC00',
    },
    OH: {
      fill: '#00CC00',
    },
    OK: {
      fill: '#00CC00',
    },
    OR: {
      fill: '#006600',
    },
    PA: {
      fill: '#00CC00',
    },
    RI: {
      fill: '#00CC00',
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
      fill: '#00CC00',
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
      fill: '#00CC00',
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
      <div className="App">
        <USAMap customize={this.statesCustomConfig()} onClick={this.mapHandler} />
      </div>
    )
  }
}

export default UnitedStatesMap
