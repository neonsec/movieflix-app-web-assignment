"use client";

import { Button } from "@repo/ui";
import { movieApi } from "@repo/api"
import styles from "../styles/index.module.css";
import { useEffect, useState } from "react";

export default function Web() {
  const [apiData, setApiData] = useState({})
  useEffect(() => {
    let params :any = {q:'a'}
    movieApi.getMovies(params)
      .then((response) => {
        setApiData(response)
      }).catch((err: any) => {
        console.log("error", err)
      })
  }, [])
  return (
    <div className={styles.container}>
      <h1>Reusable movieApi Data</h1>
      <div>
        {apiData?.movies?.map((movie: any)=>{
          return ( <p> {movie?.aka}</p>)
        })}
      <pre  style={{maxWidth: 300, height: 400}} > 
        <code >
            {JSON.stringify(apiData)?.movies}
            </code>
      </pre>
      </div>
      <Button onClick={() => console.log("Pressed!")} text="Boop" />
    </div>
  );
}
