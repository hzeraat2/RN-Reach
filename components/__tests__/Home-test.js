import { fireEvent, render, waitFor } from '@testing-library/react-native';
import { renderHook, act } from '@testing-library/react-hooks';
import 'react-native';
import React from 'react';
import Home from '../Home';
import * as news from '../../utils/news';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';


beforeEach(() => {
  fetch.resetMocks();
})
jest.mock(news, () => {
  return {
    getList: jest.fn().mockImplementation(() =>
      [
        {
          "id": 1,
          "title": "Terrifying graph shows UK’s Covid-19 curve now almost vertical as infections rise fast",
          "subtitle": "The graph, published by the Johns Hopkins University, shows cases have risen at an alarmingly fast rate over the last month as pressure mounts for a third national lockdown"
        },
        {
          "id": 2,
          "title": "Princess Diana’s wedding dress designer was 'horrified' when she saw her in gown",
          "subtitle": "Princess Diana's wedding dress was designed by Elizabeth and David Emanuel, however the couple were shocked when they saw the bride step out of her car as she arrived at the church"
        }
      ]
    )
  }
})

test('renders correctly', async () => {
  const { getByText, getByTestId } = render(<Home />)
  const element = getByTestId('main-view');
  expect(element).toBeTruthy()

  // await waitFor(() => expect(getByTestId('title-section')).toBeTruthy())
  // const newsRow = getByTestId('newsRow')
  // fireEvent.press(newsRow)
  // expect(expect(queryByTestId('newsRow')).toHaveBeenCalled())

});
