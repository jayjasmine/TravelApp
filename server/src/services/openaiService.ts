import { openai } from '../config/openai';

export const getInsights = async (location: string, userType: string) => {
  const prompt = `Provide a list of the best restaurants for ${location}. Provide the website link to each restaurant and provide a price rsange in AUD. Also show the distance from the location and proximity. Order the list by the closest restaurant first. Also include short 2 sentance description for each`;
  const response = await openai.chat.completions.create({
    // model: 'gpt-4-1106-preview',
    model: 'gpt-3.5-turbo',
    messages: [{role: 'user', content: prompt}],
  })
  return response.choices[0]?.message?.content;
};

export const getAddressIcon = async (address: string) => {
  try {
    const prompt = `Generate photo-realistic image for the following location ${address}`;
    const response = await openai.images.generate({
      model:"dall-e-3",
      prompt: prompt,
      size:"1024x1024",
      quality:"standard",
      n:1,
    });
    console.log(response)
    let image_url = response.data[0].url;
    console.log(image_url);
    return image_url;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export const getEateryResponse = async (location: string) => {
  try {
    const prompt =
      `Provide a list of 10 best restaurants for ${location}. 
      Provide the website link to each restaurant and provide a price range in AUD.
      Provide a link to Google Maps of the location.
      Inclue the Google star rating for each restaurant. 
      Show the distance from the location and proximity.
      Order the list by the closest restaurant first.
      Include short 2 sentance description for each`;
    
    const response = await openai.chat.completions.create({
      // model: 'gpt-4-1106-preview',
      model: 'gpt-3.5-turbo',
      messages: [{role: 'user', content: prompt}],
    })
    
    return response.choices[0]?.message?.content;

  } catch (error) {
    console.error(error);
    throw error;
  }
}