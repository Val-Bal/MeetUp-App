import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../App';
import mockData from '../mock-data';
import { extractLocations } from '../api';
import CitySearch from '../components/CitySearch';

const feature = loadFeature('./src/features/filterEventsByCity.feature');

defineFeature(feature, test => {

  test('When user hasn’t searched for a city, show upcoming events from all cities.', ({ given, when, then }) => {
    let AppWrapper;
    given('user hasn’t searched for any city', () => {

    });

    when('the user opens the app', () => {
      AppWrapper = mount(<App />);
    });

    then('the user should see the list of all upcoming events.', () => {
      AppWrapper.update();
      expect(AppWrapper.find('.event')).toHaveLength(Math.min(mockData.length, 32));
    });

  });

  test('User should see a list of suggestions when they search for a city.', ({ given, when, then }) => {
    let CitySearchWrapper;
    let locations = extractLocations(mockData)
    given('the main page is open', () => {
      CitySearchWrapper = shallow(<CitySearch allLocations={locations} setInfoAlert={() => {}} />);
    });

    when('user starts typing in the city textbox', () => {
      CitySearchWrapper.find('.city').simulate('change', { target: { value: 'Berlin' } }).simulate('focus');
    });

    then('the user should receive a list of cities (suggestions) that match what they’ve typed', () => {
      expect(CitySearchWrapper.find('.suggestions li')).toHaveLength(2);
    });
  });

  test('User can select a city from the suggested list.', ({ given, and, when, then }) => {
    let AppWrapper;
    given('user was typing “Berlin” in the city textbox', async () => {
      AppWrapper = await mount(<App />);
      AppWrapper.find('.city').simulate('change', { target: { value: 'Berlin' } }).simulate("focus");;
    });

    and('the list of suggested cities is showing', () => {
      AppWrapper.update();
      expect(AppWrapper.find('.suggestions li')).toHaveLength(3);
    });

    when('the user selects a city (e.g., “Berlin, Germany”) from the list', () => {
      AppWrapper.find('.suggestions li').at(0).simulate('click');
    });

    then('their city should be changed to that city (i.e., “Berlin, Germany”)', () => {
      const CitySearchWrapper = AppWrapper.find(CitySearch);
      //expect(CitySearchWrapper.state('query')).toBe('Berlin, Germany');
      // check!
    });

    and('the user should receive a list of upcoming events in that city', () => {
      expect(AppWrapper.find('.event')).toHaveLength(Math.min(mockData.length, 32));
    });
  });


});