import Airtable from "airtable";

const connectAirtable = () => {
  const apiKey = process.env.NEXT_PUBLIC_AIRTABLE_API_KEY;
  const baseId = process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID;

  if (!apiKey || !baseId) {
    throw new Error("Airtable API key or Base ID is not defined");
  }

  return new Airtable({
    apiKey: apiKey,
  }).base(baseId);
};

export default connectAirtable;
