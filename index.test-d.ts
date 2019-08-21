import {expectType} from 'tsd';
import * as ciInfo from '.';

expectType<Function>(ciInfo.detectVendor);
expectType<Function>(ciInfo.isCI);
expectType<Function>(ciInfo.isPR);
expectType<ciInfo.CiInfo.CIVendor>(ciInfo.vendors.all[0]);

expectType<ciInfo.CiInfo.CIVendor[]>(ciInfo.detectVendor());
expectType<boolean>(ciInfo.isCI());
expectType<boolean>(ciInfo.isPR());
