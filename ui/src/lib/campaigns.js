import op from 'object-path';
import status from './statuses';


export function getCampaignsList(state) {
  const result = {};

  for (const [id, campaign] of Object.entries(state.campaigns)) {

    op.set(result, [id], {
      id,
      key: id,
      title: campaign.name,
      status: status.enabled,
      articles: campaign.articles || {},
      collapsed: true
    });
  }

  return result;
}
