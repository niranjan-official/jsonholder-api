import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const Data = ({ value }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/${value}`;
    axios.get(url).then((response) => {
      console.log(response.data);
      setData(response.data);
    });
  }, [value]);

  switch (value) {
    case "posts":
      return (
        <>
          {data.map((obj) => (
            <div className="flex flex-col gap-4 bg-slate-100 p-4">
              <h1 className="text-xl font-bold">{obj.title}</h1>
              <p>{obj.body}</p>
              <hr />
            </div>
          ))}
        </>
      );
      break;

    case "comments":
      return (
        <>
          {data.map((obj) => (
            <div className="flex flex-col gap-4 bg-slate-100 p-4">
              <h1 className="text-xl font-bold">Name: {obj.name}</h1>
              <h1 className="text-xl font-semibold">Email: {obj.email}</h1>
              <p>{obj.body}</p>
              <hr />
            </div>
          ))}
        </>
      );
      break;

    case "photos":
      return (
        <>
          {data.map((obj) => (
            <div className="flex flex-col gap-4 bg-slate-100 p-4">
              <img src={obj.url} alt="" className="w-full h-auto"/>
            </div>
          ))}
        </>
      );
      break;

    case "users":
      return (
        <>
          {data.map((obj) => (
            <div className="flex flex-col gap-4 bg-slate-100 p-4">
              <h1 className="text-3xl font-bold">{obj.name}</h1>
              <h1 className="text-xl font-semibold">Email: {obj.email}</h1>
              <h1 className="text-xl font-semibold">Phone: {obj.phone}</h1>
              <h1 className="text-xl font-semibold">Company:{obj.company?.name}</h1>
              <hr />
            </div>
          ))}
        </>
      );
      break;
  }
};

export default Data;
