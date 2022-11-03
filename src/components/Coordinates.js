import React, { useState } from 'react'
import { GeoapifyGeocoderAutocomplete, GeoapifyContext } from '@geoapify/react-geocoder-autocomplete'
import '@geoapify/geocoder-autocomplete/styles/minimal.css'

const coordinates = () => {


  function onPlaceSelect(value) {
    console.log(value);
  }

  function onSuggectionChange(value) {
    console.log(value);
  }

  function preprocessHook(value) {
    return `${value}, Munich, Germany`
  }

  function postprocessHook(feature) {
    return feature.properties.street;
  }

  function suggestionsFilter(suggestions) {
    const processedStreets = [];

    const filtered = suggestions.filter(value => {
      if (!value.properties.street || processedStreets.indexOf(value.properties.street) >= 0) {
        return false;
      } else {
        processedStreets.push(value.properties.street);
        return true;
      }
    })

    return filtered;
  }

  return <GeoapifyContext apiKey="fe2e9bb4f6b441339f2ed06e21dd0fcb">

      <GeoapifyGeocoderAutocomplete
        placeSelect={onPlaceSelect}
        suggestionsChange={onSuggectionChange}
      />

      <GeoapifyGeocoderAutocomplete placeholder="Enter address here"
        value={value}
        type={type}
        lang={language}
        position={position}
        countryCodes={countryCodes}
        limit={limit}
        filterByCountryCode={filterByCountryCode}
        filterByCircle={filterByCircle}
        filterByRect={filterByRect}
        biasByCountryCode={biasByCountryCode}
        biasByCircle={biasByCircle}
        biasByRect={biasByRect}
        biasByProximity={biasByProximity}
        placeSelect={onPlaceSelect}
        suggestionsChange={onSuggectionChange}
      />

      <GeoapifyGeocoderAutocomplete
        placeSelect={onPlaceSelect}
        suggestionsChange={onSuggectionChange}
        preprocessHook={preprocessHook}
        postprocessHook={postprocessHook}
        suggestionsFilter={suggestionsFilter}
      />
    </GeoapifyContext>
}

export default coordinates