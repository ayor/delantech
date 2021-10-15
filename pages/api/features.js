import { db } from "../../middleware/db";



export default async function handler(req, res) {
    try {
        const features = [];
        const { id } = req.body; 

        const featRef = await db.collection('products').doc(id).get(); 
        const filter = (featRef.data().type)
        const _features= await db.collection('features').where("type","==",filter).get();
        
        _features.forEach(doc => {
            features.push({id : doc.id,  ...doc.data()});
          })
          console.log(features)
        if (_features.length <= 0) {
            throw new Error(`Product with id - ${id} does not exist`);
        } else {
            res.status(200).json({...features})
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ error })
    }
}