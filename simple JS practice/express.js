//////server.js file

const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose')

const app = express();
const port = process.env.PORT || 8000;

//middleware
app.use(express());
app.use(cors());

//DB Connection
mongoose.connect('uri',
    {
        useNewUrlParser: true,
        userUnifiedTopple: true,

    })
    .then(() => {
        app.listen(port, () => {
            console.log('listening the port')
        })

    })
    .catch(er => console.error(er));

app.get('/', (req, res) => {
        res.send('server is running')
})
    
export default app;


//model.js file
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
        
    },
    timestamp: true
})
    
const Product = mongoose.model('Product', productSchema);

module.export = Product;


//controller.js file/////////////

exports.createProduct = async (req, res) => {
    try {
        const product = new Product(req.body);
        await product.save();
        res.status(201).json(product);
        
    } catch (error) {
        console.error(error);

        res.status(500).json({ mes: 'server error' })
        
    }
};

exports.getProduct = async (req, res) => {
    try {
        const products = await Product.find(req.query);
        res.status(200).json(products);

    }
    catch (error) {
        
    }
}

//retrieve single object

exports.getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({mes: 'product not found'})
        }
        res.status(200).json(product);
    }
    catch {
        
    }
}

//update an object

exports.updateProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body,
            {
                new: true,
                runValidators: true,
            })
            if (!product) {
                return res.status(404).json({ message: 'Product not found' });
              }
              res.status(200).json(product);
        
    } catch {
        
    }
}

// Delete an object
exports.deleteProduct = async (req, res) => {
    try {
      const product = await Product.findByIdAndDelete(req.params.id);
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
      res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
};
  



///route..........
const router = express.Router()

router.post('/products', controller.createProduct);
router.get('/products', controller.getProduct);
router.get('/products/:id', controller.getOneProduct);
