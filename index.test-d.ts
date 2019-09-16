import {expectType} from 'tsd';
import * as ciInfo from '.';

expectType<Function>(ciInfo.detectVendor);
expectType<Function>(ciInfo.isCI);
expectType<Function>(ciInfo.isPR);

expectType<ciInfo.CiInfo.CIVendor[]>(ciInfo.vendors.all);

// Each vendor must use the correct type
for (const vendor of ciInfo.vendors.all) {
	expectType<ciInfo.CiInfo.CIVendor>(vendor);
}

expectType<ciInfo.CiInfo.CIVendor[]>(ciInfo.detectVendor());
expectType<boolean>(ciInfo.isCI());
expectType<boolean>(ciInfo.isPR());
