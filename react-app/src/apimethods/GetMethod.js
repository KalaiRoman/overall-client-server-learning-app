import React, { useEffect, useState } from "react";
import axiosInstance from "../config/httpInterceptor";

function GetMethod(url, id, body = null, method = "get", loader = true) {
  const [loading, setLoading] = useState(loader);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const getFecthData = async () => {
    setLoading(true);
    try {
      const Url = id ? `${url}/${id}` : url;
      const response = await axiosInstance.get(Url);
      if (response) {
        setData(response?.data);
        setLoading(false);
      }
    } catch (error) {
      setError(error?.response?.data || "Somehting Went Wrong Get Method");
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (loader) getFecthData();
  }, [loader]);

  return { loading, data, error, refecth: getFecthData };
}

export default GetMethod;
