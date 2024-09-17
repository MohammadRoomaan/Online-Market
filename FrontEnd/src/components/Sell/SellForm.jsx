import React, { useState } from 'react';

const SellForm = () => {
  const [image, setImage] = useState(null);

  const [productdetails, setProductDetails] = useState({
    name: "",
    image: "",
    description: "",
    price: "",
    category: "",
  });

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  const changeHandler = (e) => {
    setProductDetails({ ...productdetails, [e.target.name]: e.target.value });
  };

  const add_product = async (e) => {
    e.preventDefault();
    console.log(productdetails);

    let responsedata;
    let product = productdetails;

    let formdata = new FormData();
    formdata.append('product', image); 

    await fetch('http://localhost:4000/upload', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: formdata,
    })
      .then((response) => response.json())
      .then((data) => {
        responsedata = data;
      });

    if (responsedata.success) {
      product.image = responsedata.image_url;
      console.log(product);

      await fetch('http://localhost:4000/addproduct', { 
        method: 'POST', 
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      })
        .then((response) => response.json())
        .then((data) => {
          data.success ? alert("Product Added") : alert("Failed");
        });
    }
  };

  return (
    <>
      <h2 className="text-3xl m-10 text-center">Sell Your Product</h2>
      <div className="w-full max-w-lg mx-auto bg-gray-100 p-6 rounded-lg shadow-md">
        <form onSubmit={add_product}>
          <h1 className="text-2xl font-bold mb-6 text-center">
            Fill the details of the product you want to sell
          </h1>

          <div className="mb-4">
            <input
              name="name"
              value={productdetails.name}
              onChange={changeHandler}
              type="text"
              placeholder="Product name"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-gray-700">Upload the image</label>
            <div className="relative w-full h-40 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center bg-white cursor-pointer hover:bg-gray-50">
              <input
                type="file"
                accept="image/*"
                className="absolute inset-0 opacity-0 cursor-pointer"
                onChange={imageHandler}
              />
              <span className="text-gray-500">
                Drag and drop or click to upload
              </span>
            </div>

            {image && (
              <div className="mt-4">
                <img
                  src={URL.createObjectURL(image)}
                  alt="Preview"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            )}
          </div>

          <div className="mb-4">
            <input
              name="price"
              value={productdetails.price}
              onChange={changeHandler}
              type="number"
              placeholder="Enter the price"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <textarea
              name="description"
              value={productdetails.description}
              onChange={changeHandler}
              placeholder="Enter the details of the product"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            ></textarea>
          </div>

          <div className="mb-4">
            <select
              name="category"
              value={productdetails.category}
              onChange={changeHandler}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            >
              <option value="" disabled>
                Select category
              </option>
              <option value="electronics">Electronics</option>
              <option value="fashion">Fashion</option>
              <option value="home">Home & Living</option>
              <option value="books">Books</option>
              <option value="other">Other</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default SellForm;
