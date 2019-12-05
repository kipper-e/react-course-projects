import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
import ExpenseList from "./components/ExpenseList";

const store = configureStore();

store.subscribe(() => {
    const state = store.getState();

    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

store.dispatch(
    addExpense({
        description: "Water Bill",
        amount: 4500
    })
);

store.dispatch(
    addExpense({
        description: "Gas Bill",
        createAt: 1000
    })
);

store.dispatch(
    addExpense({
        description: "Rent Bill",
        amount: 1095000
    })
);


const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));