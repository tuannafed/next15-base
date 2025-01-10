import shared from './shared';

interface IUtils {
  shared: typeof shared;
}

const utils: IUtils = {
  shared,
};

export default utils;
