// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { db } from "../../middleware/db";

export default async function handler(req, res) {
    try {
        
        const { id } = req.body;
        const others = []; 
        const productRef = db.collection('products').doc(id);
        const product = await productRef.get();
        const type = await db.collection('products').where('type','==', product.data().type).get(); 
        type.forEach(doc => {
            others.push({id : doc.id,  ...doc.data()});
          })
        if (!product.exists) {
            throw new Error(`Product with id - ${id} does not exist`);
        } else {
            res.status(200).json({product : { id: product.id, ...product.data() }, others : others.filter(item=> item.id !== id) })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ error })
    }
}
