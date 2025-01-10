// app.enum.d.ts

declare global {
  namespace Enum {
    export enum DataType {
      Object = 'object',
      Array = 'array',
      String = 'string',
      Number = 'number',
    }

    export enum LanguageCode {
      English = 'en',
      Japanese = 'ja',
    }

    export enum RegionalLocale {
      EnglishUS = 'en-US',
      JapaneseJP = 'ja-JP',
    }

    export enum ResponseStatus {
      Success = 'success',
      Failure = 'failure',
    }

    export enum Toast {
      Success = 'success',
      Error = 'error',
      Info = 'info',
      Warning = 'warning',
    }
  }
}

export {};
