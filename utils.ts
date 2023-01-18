import { Beer } from "./types";

const CONTENT_TYPE = "application/json";

function primaryResponseHandler<T>(response: Response) {
  const json: Promise<T> = response.json();
  if (response.ok) {
    return json;
  }
  return Promise.reject(json);
}

export async function getBeers(page: number, perPage: number, searchTerm: string | null): Promise<Beer[] | undefined> {
  try {
    let query = 'https://api.punkapi.com/v2/beers?';
    if (searchTerm) {
      query = query + 'beer_name=' + searchTerm + '&';
    }
    query = query + `page=${page}&per_page=${perPage}`;
    const results = await fetch(query, {
      method: "GET",
      headers: { "Content-Type": CONTENT_TYPE },
    });
    return primaryResponseHandler<Beer[]>(results);
  } catch (error) {
    console.error("Kinda Beer Place received an error from the Beers API", error);
    return undefined;
  }
}
