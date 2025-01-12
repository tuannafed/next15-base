import shared from './shared';
import routePages from './routePages';
import routeApis from './routeApis';

interface IConstants {
  shared: typeof shared;
  routePages: typeof routePages;
  routeApis: typeof routeApis;
}

const constants: IConstants = {
  shared,
  routePages,
  routeApis,
};

export default constants;
