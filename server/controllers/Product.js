import Product from "../modules/User.js";

const postProduct = async (req, res) => {

    const { title, description, price, image, unit } = req.body;
    try {
        const image = req.file.path; 
        const newProduct = new Product({
            title: title,
            description: description,
            price: price,
            image: image,
            unit: unit
        });


        const savedProduct = await newProduct.save();
        res.status(201).send({
            success: true,
            data: savedProduct,
            message: "New Product is Saved SuccesFully !!!"
        })
    } catch (e) {
        res.status(201).send({
            success: false,
            message: e.message,
        })
    }
};

const getProduct = async (req, res) => {
    try {
        const productData = await Product.find();

        res.status(200).send(
            {
                success: true,
                data: productData,
                message: " all Product data fetch successfully"
            })
    }
    catch (e) {
        res.status(500).send(
            {
                success: false,
                message: e.message
            }
        )
    }
};

const putProduct = async (req, res) => {
  const { id } = req.params;
  const { title, description, price, unit } = req.body;

  try {
    const updateData = {
      ...(title && { title }),
      ...(description && { description }),
      ...(price && { price }),
      ...(unit && { unit }),
    };

    // Include new image if uploaded
    if (req.file && req.file.path) {
      updateData.image = req.file.path;
    }

    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { $set: updateData },
      { new: true } 
    );

    if (!updatedProduct) {
      return res.status(404).send({
        success: false,
        message: "Product not found",
      });
    }

    res.status(200).send({
      success: true,
      data: updatedProduct,
      message: "Product updated successfully!",
    });
  } catch (e) {
    res.status(500).send({
      success: false,
      message: e.message,
    });
  }
};


export {postProduct,getProduct,putProduct}

