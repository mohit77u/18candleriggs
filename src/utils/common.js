// for testing purpose I passed api key here other wise from env file we can get all variables
export const apiKey = 'rARvhrjSBSs5agzEUFpBeqUC0fp0DRV7h9KMvUFXLvVPofH31hGfsjNa';
// const API_KEY = process.env.NEXT_PUBLIC_PEXELS_API_KEY;


// format Images
export default function formatImages(images){
    const chunkSize = 4;
    const chunks = [];
    
    for (let i = 0; i < images.length; i += chunkSize) {
      chunks.push(images.slice(i, i + chunkSize));
    }
    
    const formattedArr = [];
    
    for (let i = 0; i < chunks.length; i++) {
      const chunk = chunks[i];
      if (chunk.length === 1) {
        formattedArr.push(chunk[0]);
      } else {
        formattedArr.push(chunk);
      }
    }

    let finalImages = []

    finalImages.push(formattedArr[2][0])
    finalImages.push(formattedArr[0])
    finalImages.push(formattedArr[1])
    finalImages.push(formattedArr[2][1])
    
    return finalImages;
}