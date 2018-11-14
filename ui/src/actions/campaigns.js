import Backend from '../lib/backend';

export const GET_CAMPAIGNS_REQUEST = 'GET_CAMPAIGNS_REQUEST';
export const GET_CAMPAIGNS_SUCCESS = 'GET_CAMPAIGNS_SUCCESS';
export const GET_CAMPAIGNS_ERROR = 'GET_CAMPAIGNS_ERROR';


export function getCampaigns() {

  return async (dispatch) => {
    try {
      dispatch({type: GET_CAMPAIGNS_REQUEST});

      const response = await Backend.get('/campaigns');

      dispatch({
        type: GET_CAMPAIGNS_SUCCESS,
        data: response.data
      })
    }
    catch (error) {
      console.error(error);
      dispatch({type: GET_CAMPAIGNS_ERROR})
    }
  };

}
