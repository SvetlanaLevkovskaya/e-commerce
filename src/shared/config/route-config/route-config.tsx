import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/main-page';
import { CartPage } from 'pages/cart-page/indx';
import { OrderPage } from 'pages/order-page';
import { NotFoundPage } from 'pages/not-found-page';

export enum AppRoutes {
	MAIN = 'main',
	CART = 'cart',
	ORDER = 'order',
	NOT_FOUND = 'not-found',
}

export const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: '/e-commerce/',
	[AppRoutes.CART]: '/e-commerce/cart',
	[AppRoutes.ORDER]: '/e-commerce/order',
	[AppRoutes.NOT_FOUND]: '/e-commerce/*',
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
	[AppRoutes.MAIN]: {
		path: RoutePath.main,
		element: <MainPage />,
	},
	[AppRoutes.CART]: {
		path: RoutePath.cart,
		element: <CartPage />,
	},
	[AppRoutes.ORDER]: {
		path: RoutePath.order,
		element: <OrderPage />,
	},
	[AppRoutes.NOT_FOUND]: {
		path: RoutePath['not-found'],
		element: <NotFoundPage />,
	},
}
