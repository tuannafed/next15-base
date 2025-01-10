/* eslint-disable @typescript-eslint/no-explicit-any */
import qs from 'qs';

const shared = {
  sleep: (second: number) => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, 1000 * second);
    });
  },
  formatQueryString: (
    baseUrl: string,
    pathParams?: string | number | (string | number)[],
    query?: string | string[] | Record<string, any>,
  ): string => {
    let url = baseUrl;

    // Handle pathParams: append them to the baseUrl
    if (pathParams) {
      const formattedPathParams = Array.isArray(pathParams)
        ? pathParams.filter(Boolean).join('/')
        : pathParams;

      url = `${baseUrl}/${formattedPathParams}`;
    }

    // Handle query parameters: append as query string
    if (
      query &&
      typeof query === Enum.DataType.Object &&
      Object.keys(query).length > 0
    ) {
      const cleanedQuery = Object.fromEntries(
        Object.entries(query).filter(
          ([_, value]) => value !== '' && value != null,
        ),
      );

      const queryString = qs.stringify(cleanedQuery, {
        arrayFormat: 'brackets',
      });

      if (queryString) {
        url += `?${queryString}`;
      }
    }

    return url;
  },
  parseApiEndpoint: (
    endPoint: string,
    parameters?: IEndPointParameter,
  ): string => {
    if (!parameters) {
      return endPoint;
    }

    const regex = /{(.*?)}/g;
    let newEndPoint = endPoint;
    let match: string[] | null;

    while ((match = regex.exec(endPoint))) {
      if (match === null) {
        continue;
      }

      const keyMatch: string = match?.[0];
      const parameterMatch: string = match?.[1];

      if (!keyMatch || !parameterMatch) {
        continue;
      }

      const parameter = parameters?.[parameterMatch];

      newEndPoint = newEndPoint.replace(
        keyMatch,
        parameter ? parameter.toString() : keyMatch,
      );
    }

    return newEndPoint;
  },
};

export default shared;
