import { createContext, useEffect, useState } from "react";
import {  Zoom, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DataContext = createContext({})
export const DataProvider = ({ children }) => {

    // State for JSON Data
    const [products, setProducts] = useState([
        {
            "id": 1,
            "title": "iPhone 9",
            "description": "An apple mobile which is nothing like apple.",
            "price": 20000,
            "discountPercentage": 12.96,
            "rating": 4.69,
            "stock": 94,
            "brand": "Apple",
            "category": "smartphones",
            "cart": false,
            "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9h5fFpuVuDtR3cHU99XMONer0jwyZfLyR1w&usqp=CAU",
            "quantity": 1
        },
        {
            "id": 2,
            "title": "iPhone X",
            "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip.",
            "price": 31000,
            "discountPercentage": 17.94,
            "rating": 4.44,
            "stock": 34,
            "brand": "Apple",
            "category": "smartphones",
            "cart": false,
            "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGd92KbLISjVgXmoD1GOtCkdoMRpgA0WzqGCkK4HJbkWek3qyYT5uDRekCcQBpR7iDsEU&usqp=CAU",
            "quantity": 1
        },
        {
            "id": 3,
            "title": "Samsung Universe 9",
            "description": "Samsung's new variant which goes beyond Galaxy to the Universe.",
            "price": 23000,
            "discountPercentage": 15.46,
            "rating": 4.09,
            "stock": 36,
            "brand": "Samsung",
            "category": "smartphones",
            "cart": false,
            "thumbnail": "data:image/jpeg;base64,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",
            "quantity": 1
        },
        {
            "id": 4,
            "title": "OPPOF19",
            "description": "OPPO F19 is officially announced on April 2021.",
            "price": 21500,
            "discountPercentage": 17.91,
            "rating": 4.3,
            "stock": 123,
            "brand": "OPPO",
            "category": "smartphones",
            "cart": false,
            "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnFikN3K-dAx0uFtaLhtFVdf4gwN4kJKCBDeOtxIetuBhZpGQRzViQsJsQqDVf3iOu8Yw&usqp=CAU",
            "quantity": 1
        },
        {
            "id": 5,
            "title": "Huawei P30",
            "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
            "price": 28500,
            "discountPercentage": 10.58,
            "rating": 4.09,
            "stock": 32,
            "brand": "Huawei",
            "category": "smartphones",
            "cart": false,
            "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcpQNmtYwMIwrw6tRlAvm6P4WKRjffc-IK-qnI_BlbtUaX42lR0vWS14G-u97p6VnfInQ&usqp=CAU",
            "quantity": 1
        }
    ])

    // States
    const [cartLists, setCartLists] = useState([])
    const [cartBtn, setcartBtn] = useState(false)
    const [totalQuantity, setTotalQuantity] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)
    const [shippingFee, setShippingFee] = useState(0)
    const [cartCount, setCartCount] = useState(0)

    // Default useEffects
    useEffect(() => {
        const newCartList = products.filter((product) => product.cart)
        setCartLists(newCartList)
        const count = cartLists.length;
        setCartCount(count)
    }, [products, cartBtn])

    useEffect(() => {
        const calculateQuantity = cartLists.reduce((acc, product) => acc + product.quantity, 0);
        setTotalQuantity(calculateQuantity)
        const calculatePrice = cartLists.reduce((acc, product) => acc + product.price, 0);
        setTotalPrice(calculatePrice)

        calculatePrice > 25000 ? setShippingFee(0) : setShippingFee(40)

        const count = cartLists.length;
        setCartCount(count)
    }, [cartLists])

    // Add product to cart
    const addToCart = (id) => {
        const productItem = products.map((product) => product.id == id ? { ...product, cart: true } : product);
        setProducts(productItem);
        notifyToast("Successfully added into Cart");
    }

    // Remove product from cart
    const removeFromCart = (id) => {
        const removedItem = products.map((product) => product.id == id ? { ...product, cart: false } : product)
        setProducts(removedItem);
        notifyToast("Successfully removed from Cart")
    }

    // Updata when clicking cart button
    const listenCartBtn = () => {
        setcartBtn(!cartBtn);
    }

    // Increase cart product quantity
    const increaseItemQuantity = (datas) => {
        let data = datas.split(",")
        let [id, quan, price] = [...data]
        let fixed_price = (parseInt(price) / parseInt(quan))
        let quans = parseInt(quan) + 1;
        let prices = parseInt(quans * fixed_price);
        let cartQuan = cartLists.map((product) => {
            return product.id == id ? { ...product, price: prices, quantity: quans } : product
        })
        setCartLists(cartQuan)
    }

    // Decrease cart product quantity
    const decreaseItemQuantity = (datas) => {
        let data = datas.split(",")
        let [id, quan, price] = [...data]
        let fixed_price = (parseInt(price) / parseInt(quan))
        let quans = parseInt(quan) - 1;
        if (quans > 0) {
            let prices = parseInt(quans * fixed_price);
            let cartQuan = cartLists.map((product) => {
                return product.id == id ? { ...product, price: prices, quantity: quans } : product
            })
            setCartLists(cartQuan)
        }
    }
    
    const notifyToast = (message) => {
        toast.success(`${message}`, {
          position: "top-right",
          autoClose: 2000,
          theme: "colored",
          transition: Zoom,
          pauseOnHover: false
        });
      }

    return (
        <DataContext.Provider value={{
            products, addToCart, cartLists, removeFromCart, listenCartBtn,
            increaseItemQuantity, decreaseItemQuantity, totalQuantity, totalPrice,
            shippingFee, cartCount
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext