import base from '@/request/base'
import $http from '@/request/network'

const user = {
  login(params) {
    return $http.post(`${base.rap2rights}loginByPhone`, params)
  }
}

export default user