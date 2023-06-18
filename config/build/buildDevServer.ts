import { BuildOptions } from './types/config';
import type { Configuration  as DevPackConfiguration } from 'webpack-dev-server';
export function buildDevServer(options: BuildOptions): DevPackConfiguration {
	return {
		port: options.port,
		open: true,
		historyApiFallback: true,
	}
}
