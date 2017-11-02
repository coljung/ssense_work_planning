import { combineReducers } from 'redux';
import BudgetReducer from './budgets/BudgetReducer';
import ExecViewReducer from 'top_down/exec/ExecViewReducer';
import TotalViewReducer from 'top_down/total/TotalViewReducer';
import Message from './notifications/NotificationReducer';

export default combineReducers({
    BudgetReducer,
    ExecViewReducer,
    TotalViewReducer,
    Message,
});
