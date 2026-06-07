import axios from "axios";
import FormData from "form-data";
import querystring from "querystring";

export function postFormData(url, params, headers) {
  const formData = new FormData();
  for (const key in params) {
    formData.append(key, params[key]);
  }
  const config = {
    method: "post",
    url: url,
    headers: headers,
    data: formData,
  };
  return axios(config)
    .then((res) => {
      if (res.status === 200) {
        return res.data;
      }
    })
    .catch((error) => {
      console.error("POST API ERR: ", error);
      return {
        error: true,
        errMsg: error.toString(),
        errorResp: error.response?.data || null,
      };
    });
}

export function postJsonData(url, params, headers) {
  const config = {
    method: "post",
    url: url,
    headers: { "Content-Type": "application/json", ...headers },
    data: JSON.stringify(params),
  };
  return axios(config)
    .then((res) => {
      if (res.status === 200 || res.status === 201) {
        return res.data;
      }
    })
    .catch((error) => {
      console.error("POST API ERR: ", error);
      return {
        error: true,
        errMsg: error.toString(),
        errorResp: error.response?.data || null,
      };
    });
}

export function postFormDataSearchParams(url, params) {
  const formData = new URLSearchParams(params);
  const config = {
    method: "POST",
    headers: {
      "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    },
    body: formData,
  };
  return fetch(url, config).then((res) => res.json());
}

export function getData(url, options, headers) {
  const axiosConf = {
    headers: headers,
  };
  const qs = querystring.stringify(options);

  if (qs) {
    url += "&" + qs;
  }

  return axios
    .get(url, axiosConf)
    .then((res) => {
      if (res.status === 200) {
        return res.data;
      }

      if (res.status === 204) {
        return { status: res.status };
      }
    })
    .catch((error) => {
      const aborted = axios?.isCancel(error) ? true : false;
      const errNetwork = error?.code === "ERR_NETWORK" ? true : false;
      console.error(
        "API ERR: ",
        new Date().toString(),
        error.code,
        error.toString(),
        url,
        aborted,
        errNetwork,
      );
      return {
        error: true,
        errMsg: error.toString(),
        errorResp: error,
        aborted,
        errNetwork,
      };
    });
}

export function postDataWithPathParams(url, options, headers, pathParams) {
  let path = "";
  pathParams.forEach((item) => {
    path += item + "/";
  });
  url += path;
  const config = {
    method: "post",
    url: url,
    headers: { ...headers, "Content-Type": "application/json" },
    data: JSON.stringify(options),
  };

  return axios(config)
    .then((res) => {
      if (res.status === 200) {
        return res.data;
      }
    })
    .catch((error) => {
      console.error("POST API ERR: ", error);
      return {
        error: true,
        errMsg: error.toString(),
        errorResp: error.response?.data || null,
      };
    });
}

export function patchData(url, params, headers) {
  const config = {
    method: "patch",
    url,
    headers: { "Content-Type": "application/json", ...headers },
    data: JSON.stringify(params),
  };
  return axios(config)
    .then((res) => {
      if (res.status === 200) {
        return res.data;
      }
    })
    .catch((error) => {
      console.error("Patch API error: ", error);
      return {
        error: true,
        errMsg: error.toString(),
        errorResp: error.response?.data || null,
      };
    });
}

export async function putData(url, params, headers) {
  const config = {
    method: "put",
    url,
    headers: { "Content-Type": "application/json", ...headers },
    data: JSON.stringify(params),
  };
  try {
    const res = await axios(config);
    if (res.status === 200) {
      return res.data;
    }
  } catch (error) {
    console.error("Put API error: ", error);
    return {
      error: true,
      errMsg: error.toString(),
      errorResp: error.response?.data || null,
    };
  }
}
