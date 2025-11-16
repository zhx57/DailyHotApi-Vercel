import app from "dailyhot-api/dist/app.js";

export default async (req) => {
  return app.fetch(req);
};

export const config = {
  path: "/*"
};
