// import { AxiosRequestConfig } from 'axios';
// import { i18n } from 'next-i18next';

// import {
//   TCustomAxiosRequestConfig,
//   TErrorResponse,
//   TResponse,
// } from '@/typings/axios';
// import cookie, {
//   keyAccessToken,
//   keyIdToken,
//   keyRefreshToken,
// } from '@/utils/cookie';
// import routes from '@/constants/routes';
// import { EErrorCode, EErrorCodeFormat } from '@/constants/enums';
// import { calculateExpiredTime } from '@/utils/datetime';
// import { generatePathRequireLogin } from '@/utils/generatePathRequireLogin';
// import { removeCartLS, setIsUserBannedToLS } from '@/utils/localStorage';

// import axios from './appAxios';
// import cognitoService from './cognitoService';

// export const handleRefreshTokenClientExpired = () => {
//   const isErrorPathname = (
//     [routes.NOT_FOUND, routes.INTERNAL_SERVER_ERROR] as string[]
//   ).includes(window.location.pathname);
//   if (isErrorPathname) return;

//   cookie.deleteAll();
//   removeCartLS();
//   window.location.assign(
//     `${generatePathRequireLogin(
//       window.location.href,
//       i18n?.language,
//     )}&errorCode=${EErrorCode.Unauthorized}`,
//   );
// };

// export const handleRefreshTokenClient = async () => {
//   const refreshTokenFromCookie = cookie.get(keyRefreshToken);

//   try {
//     if (!refreshTokenFromCookie) {
//       throw new Error();
//     }

//     const response = await cognitoService.refreshToken(refreshTokenFromCookie);
//     const newIdToken = response.AuthenticationResult?.IdToken ?? '';
//     const newAccessToken = response.AuthenticationResult?.AccessToken ?? '';
//     const expiresIn = response.AuthenticationResult?.ExpiresIn ?? 0;
//     const expiresTime = calculateExpiredTime(expiresIn);

//     cookie.set(keyIdToken, newIdToken, expiresTime);
//     cookie.set(keyAccessToken, newAccessToken, expiresTime);

//     return response;
//   } catch (error) {
//     handleRefreshTokenClientExpired();
//   }
// };

// export const checkShouldRefreshToken = async () => {
//   const accessTokenFromCookie = cookie.get(keyAccessToken);

//   try {
//     if (accessTokenFromCookie) {
//       await cognitoService.getUser(accessTokenFromCookie);
//     }
//     return false;
//   } catch (err: any) {
//     if (err?.name === 'NotAuthorizedException') return true;
//   }
// };

// export const request = async <T>(
//   config: AxiosRequestConfig & TCustomAxiosRequestConfig,
// ) => {
//   try {
//     const { status, data }: TResponse<T> = await axios(config);

//     return { status, data };
//   } catch (error: any) {
//     if (
//       error.response?.status === EErrorCode.BadRequest &&
//       typeof window !== 'undefined'
//     ) {
//       if (
//         error.response.data[0]?.code === EErrorCodeFormat.isCurrentUserSuspended
//       ) {
//         setIsUserBannedToLS('true');
//         cookie.deleteAll();
//         removeCartLS();
//         window.location.assign(
//           `${
//             i18n && i18n.language !== 'ja' ? routes.ROOT + i18n.language : ''
//           }${routes.HOME}?errorCode=${EErrorCodeFormat.isCurrentUserSuspended}`,
//         );
//       } else if (
//         error.response.data[0]?.code === EErrorCodeFormat.isUserSuspended
//       ) {
//         window.location.assign(
//           `${
//             i18n && i18n.language !== 'ja' ? routes.ROOT + i18n.language : ''
//           }${routes.USER_SUSPENSION}`,
//         );
//       }
//     }

//     if (typeof window === 'undefined') {
//       console.log('URL ->', error.config.url);
//       console.log('METHOD ->', error.config.method);
//       console.log('MESSAGE ->', error.message);

//       if (Object.prototype.hasOwnProperty.call(error, 'response')) {
//         console.log('status', error.response?.status);
//         console.log('data', JSON.stringify(error.response.data));
//       }
//     }
//     const { status, data }: TResponse<TErrorResponse> = error.response ?? {};

//     return Promise.reject({ status, data });
//   }
// };
