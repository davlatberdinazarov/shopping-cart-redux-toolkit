import { cartActions } from "./cart-slice";
import { uiSliceActions } from "./ui-slice";



export const fetchData = () => {
    return async (dispatch) => {
        const fetchHendler = async () => {
            const res = await fetch("https://redux-tutorial-22192-default-rtdb.asia-southeast1.firebasedatabase.app/cartItems.json")
            const data = await res.json();
            return data;
        }
        try {
            const cartData = await fetchHendler();
            dispatch(cartActions.replaceData(cartData));
        } catch (error) {
            dispatch(uiSliceActions.showNotification({
                open: true,
                message: "Error sending request to database",
                type: 'error'
            }));
        }
    }

};


export const sendCartData = (cart) => {
    return async (dispatch) => {
        // Show sending request notification
        dispatch(uiSliceActions.showNotification({
            open: true,
            message: "Sending request",
            type: 'warning'
        }));

        // Function to send the request
        const sendRequest = async () => {
            const response = await fetch('https://redux-tutorial-22192-default-rtdb.asia-southeast1.firebasedatabase.app/cartItems.json', {
                method: 'PUT',
                body: JSON.stringify(cart),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error("Failed to send cart data.");
            }

            const data = await response.json();

            // Send request successful notification
            dispatch(uiSliceActions.showNotification({
                open: true,
                message: "Sending request to database successfully",
                type: 'success'
            }));
        };

        try {
            await sendRequest();
        } catch (error) {
            dispatch(uiSliceActions.showNotification({
                open: true,
                message: "Error sending request to database",
                type: 'error'
            }));
        }
    };
};