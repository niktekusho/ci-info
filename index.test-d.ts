import { expectType } from 'tsd';
import * as ciInfo from '.';

expectType<(envs?: NodeJS.ProcessEnv) => ciInfo.CiInfo.CIVendor[]>(ciInfo.detectVendor);
expectType<(envs?: NodeJS.ProcessEnv) => boolean>(ciInfo.isCI);
expectType<(envs?: NodeJS.ProcessEnv) => boolean>(ciInfo.isPR);

expectType<ciInfo.CiInfo.CIVendor[]>(ciInfo.vendors.all);

// Each vendor must use the correct type
for (const vendor of ciInfo.vendors.all) {
	expectType<ciInfo.CiInfo.CIVendor>(vendor);
}

expectType<ciInfo.CiInfo.CIVendor[]>(ciInfo.detectVendor());
expectType<boolean>(ciInfo.isCI());
expectType<boolean>(ciInfo.isPR());
