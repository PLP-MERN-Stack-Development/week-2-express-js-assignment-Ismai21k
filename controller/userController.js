// Sample in-memory products database
let products = [
  {
    id: '1',
    name: 'Laptop',
    description: 'High-performance laptop with 16GB RAM',
    price: 1200,
    category: 'electronics',
    inStock: true
  },
  {
    id: '2',
    name: 'Smartphone',
    description: 'Latest model with 128GB storage',
    price: 800,
    category: 'electronics',
    inStock: true
  },
  {

    id: '3',
    name: 'Coffee Maker',
    description: 'Programmable coffee maker with timer',
    price: 50,
    category: 'kitchen',
    inStock: false
  }
];

exports.getAllProducts = (req, res) => {
    res.json(products);
}

exports.getSpecificProduct = (req, res, next) => {
  const id = req.params.id;
  const product = products.find( item => item.id == id);

  if (!product) {
    next(new notFoundError(`Product with the id: ${id} not Found`))
  } else{
    res.send(product)
  }
};

exports.searchByCategory = (req, res, next) => {
  
  try {
    const { category } = req.query;

    let filterProducts = products;

    if(category){
      filterProducts = filterProducts.filter(p => p.category === category)
      console.log(filterProducts)
    }
    if(filterProducts.length === 0){
      return next(new notFoundError('No product found in this category'))
    }
    

    res.json(filterProducts)
  
  } catch (error) {
    next(error);
  }
};

exports.pagination =  (req, res) => {
    const { category, page = 1, limit = 10 } = req.query;

    let filteredProducts = products;

    // Filter by category
    if (category) {
        filteredProducts = filteredProducts.filter(p => p.category === category);
    }

    // Pagination
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + Number(limit);
    const paginated = filteredProducts.slice(startIndex, endIndex);

    res.json({
        total: filteredProducts.length,
        page: Number(page),
        limit: Number(limit),
        data: paginated
    })
};

exports.searchByName =  (req, res) => {
  const { name } = req.query;

  if(!name){
    return res.status(400).json({error: 'Search term is required'})
  }

  const result = products.filter(p =>
    p.name.toLowerCase().includes(name.toLocaleLowerCase())
  );

  res.json(result)
};

exports.getStatistics = (req, res) => {
  const start = {};

  products.forEach(p => {
    start[p.category] = (start[p.category] || 0) + 1})

    res.json(start)
};

exports.insertProduct = (req, res) => {
  
  const {name, description,price, category, inStock} = req.body;

  const newItem = {id:uuidv4(),name, description,price, category, inStock}

  products.push(newItem);
  console.log( validateProduct)
  res.send(newItem)
  
};

exports.updateProduct =  (req, res) => {
  const id = req.params.id;
  const {name, description,price, category, inStock} = req.body;
  const product = products.find(item => item.id == id)

  if(name) product.name = name;
  if(name) product.description = description;
  if(name) product.price = price;
  if(name) product.category = category;
  if(name) product.inStock = inStock;
  
  res.status(200).send(product)

};

exports.deleteProduct = (req, res, next) => {
  const id = req.params.id;
  const index = products.findIndex(item => item.id == id);


  if (index === -1) {
    // If not found, pass error to error handler
    return next(new notFoundError(`Product with the id: ${id} not found`));
  }

  products.splice(index, 1);
  res.status(200).send(`Item successfully deleted with the id: ${id}`);
};