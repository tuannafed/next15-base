import shared from './shared';
import routePages from './routePages';
import routeApis from './routeApis';
import siteConfigs from './siteConfig';

interface IConstants {
  shared: typeof shared;
  routePages: typeof routePages;
  routeApis: typeof routeApis;
  siteConfigs: typeof siteConfigs;
}

const constants: IConstants = {
  shared,
  routePages,
  routeApis,
  siteConfigs,
};

export default constants;
