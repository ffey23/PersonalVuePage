import env from '../../.env'
export default function createApiUrl(endpoint) {
  return `${env.API_BASE_URL}/${endpoint}`
}
