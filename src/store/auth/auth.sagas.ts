import { call } from "redux-saga/effects"
import { login } from "./auth.api"
import { AuthConstants } from "./auth.enum"
import { AuthValues } from "../../components/Auth"

export function* handleLoginRequest(body: AuthValues) { 
  try {
    const { hits } = yield call(login)
    yield put(fetchNewsSuccess(hits))
  } catch {
    yield put(fetchNewsFailure('Error fetching latest news'))
  }
}


export function* watchLoginRequestSaga() {
  yield takeEvery(AuthConstants.AUTH_LOGIN, handleLoginRequest)
}