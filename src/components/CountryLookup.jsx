export default async function CountryLookup() {
  const response = await fetch(
    `http://api.ipstack.com/check?access_key=${process.env.NEXT_PUBLIC_IP_API_KEY}`
  );
  const jsonData = await response.json();
  return jsonData ? jsonData.country_name : <div>United States</div>;
}
