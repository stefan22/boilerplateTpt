import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DashboardComp from './DashboardComp';
import HomeComp from './HomeComp';
import AddExpenseComp from './AddExpenseComp';
//import EditExpenseComp from './EditExpenseComp';
import HelpComp from './HelpComp';
import Header from './HeaderComp';
import NotFoundComp from './NotFoundComp';
import PortfolioComp from './PortfolioComp';
import PortfolioItemComp from './PortfolioItemComp';
import ContactComp from './ContactComp';

const AppRouter = () => {
	return <BrowserRouter>
			<div>
				<Header />
				<Switch>
					<Route path="/" component={DashboardComp} exact={true} />
					<Route path="/home" component={HomeComp} />
					<Route path="/create" component={AddExpenseComp} />
               <Route path="/portfolio" component={PortfolioComp} exact={true} />
               <Route path="/portfolio/:id" component={PortfolioItemComp} />
					<Route path="/help" component={HelpComp} />
					<Route path="/contact" component={ContactComp} />
					<Route component={NotFoundComp} />
				</Switch>
			</div>
		</BrowserRouter>;
};

export default AppRouter;
