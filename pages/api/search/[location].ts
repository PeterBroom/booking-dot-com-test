
import type { NextApiRequest, NextApiResponse} from 'next'
import axios from "axios";

export default async function searchHandler(
  req: NextApiRequest, 
  res: NextApiResponse
) {
  const domain = process.env.NEXT_PUBLIC_SEARCH_DOMAIN;
  const {location} = req.query
  const count: number = 6
  const endpoint = `https://${domain}/FTSAutocomplete.do?solrIndex=fts_en&solrRows=${count}&solrTerm=${location}`;
  const headers = {
    'Content-Type': 'application/json'
  };

  try {
    const response = await axios.post(endpoint, {headers})
    res.status(200).json(response.data.results)
  } catch(err) {
    res.status(405).json({err: `Something has gone wrong... ${err}`})
  }
}
