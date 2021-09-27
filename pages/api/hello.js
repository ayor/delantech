// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { db } from "./middleware/db";

export default async function handler(req, res) {
  const products = [];
  const productCol = await db.collection('products').get();
  productCol.forEach(doc => {
    products.push({
      id: doc.id,
      product: doc.data()
    })
  });
  console.log(products)
  res.status(200).json({ products })
}
