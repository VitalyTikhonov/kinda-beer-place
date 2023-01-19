import { Beer } from "./types";

const requestOptions = {
  method: "GET",
  headers: { "Content-Type": "application/json" },
};

function primaryResponseHandler<T>(response: Response) {
  const json: Promise<T> = response.json();
  if (response.ok) {
    return json;
  }
  return Promise.reject(json);
}

export async function getBeers(
  page: number,
  perPage: number | undefined,
  searchTerm: string | null
): Promise<Beer[] | undefined> {
  try {
    let query = "https://api.punkapi.com/v2/beers?";
    if (searchTerm) {
      query = query + "beer_name=" + searchTerm + "&";
    }
    query = query + `page=${page}&per_page=${perPage ?? 50}`;
    const results = await fetch(query, requestOptions);
    return primaryResponseHandler<Beer[]>(results);
  } catch (error) {
    console.error("Kinda Beer Place received an error from the Beers API while getting beers", error);
    return undefined;
  }
}

export async function getThatBeer(index: number): Promise<Beer[] | undefined> {
  try {
    const results = await fetch(`https://api.punkapi.com/v2/beers/${index}`, requestOptions);
    return primaryResponseHandler<Beer[]>(results);
  } catch (error) {
    console.error(`Kinda Beer Place received an error from the Beers API while getting beer ${index}`, error);
    return undefined;
  }
}
