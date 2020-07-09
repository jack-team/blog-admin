import Ajax from 'axios';
import Error from './error';
import Request from './request';
import Response from './response';

const Instance = Ajax.create({
    baseURL:`/system`
});

const {
    request,
    response
} = Instance.interceptors;

request.use(Request);
response.use(Response,Error);

export default Instance;

