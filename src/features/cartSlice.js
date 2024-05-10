import { createSlice } from "@reduxjs/toolkit"

export const cartSlice = createSlice({

    name: "cart",
    initialState: {
        value: {
            user: "userIdLogged",
            updatedAt: new Date().toLocaleString(),
            total: null,
            items: [],
        },
    },
    reducers: {
        addCartItem: (state, { payload }) => {
            //Logic to add product
            const productRepeated = state.value.items.find(
                (item) => item.id === payload.id
            )
            if (productRepeated) {
                alert("El product ya esta en el carrito...")
            } else {
                state.value.items.push(payload)
                const total = state.value.items.reduce(
                    (acc, currentItem) =>
                        (acc += currentItem.price * currentItem.quantity),
                    0
                )
                state.value = {
                    ...state.value,
                    total,
                    updatedAt: new Date().toLocaleString(),
                }
            }
        },
        removeCartItem: (state, {payload}) => {
            // logic to remove product
            state.value.items = state.value.items.filter(
                (item) => item.id !== payload.id
            );
            const total = state.value.items.reduce(
                (acc, currentItem) =>
                    (acc += currentItem.price * currentItem.quantity),
                0
            )
            state.value = {
                ...state.value,
                total,
                updatedAt: new Date().toLocaleString()
            }
        },
        cleanCart: (state) => {
            // logic to remove product
            state.value.total = null;
            state.value.items = [];
        },
    }
})

export const { addCartItem, removeCartItem, cleanCart } = cartSlice.actions
export default cartSlice.reducer